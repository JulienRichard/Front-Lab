<template>
  <div class="search">
    <div @click="toggleSearch" class="search-toggle">
      <span v-if="searchIsVisible">
        <i class="fa fa-times"></i>
      </span>
      <span v-else>
        <i class="fa fa-search"></i>
      </span>
    </div>

    <div v-if="searchIsVisible" class="search-interface">
      <input type="text" v-model="inputs.term" @keyup.enter="performSearch" placeholder="Enter search term">
      <select v-model="inputs.type">
        <option>Posts</option>
        <option>Pages</option>
      </select>

      <div v-if="returnedSearchResults" class="search-results">
        <div v-if="returnedSearchResults.length === 0">
          No results found
        </div>
        <div v-else>
          <ul>
            <li v-for="result in returnedSearchResults">
              <search-result :result="result" :type="inputs.type"></search-result>
            </li>
          </ul>
          <p v-if="returnedSearchResults.length > 10">See all results</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import search from '../api'
import SearchResult from './SearchResult'

export default {
  components: {
    SearchResult
  },

  data () {
    return {
      search: search,
      inputs: {
        term: '',
        type: 'Posts'
      },
      searchIsVisible: false,
      results: false,
      isMakingRequest: false
    }
  },

  computed: {
    returnedSearchResults () {
      return this.results
    }
  },

  methods: {
    /*
    Toggle the visibility of the search input field
    and search result listings.
    */
    toggleSearch () {
      this.searchIsVisible = this.searchIsVisible !== true
    },

    /*
    Perform a search based on the input query as well
    as the type of search indicated ie. page or post.
    */
    performSearch () {
      if (this.isMakingRequest || this.inputs.term.length === 0 || this.inputs.type.length === 0) {
        return false
      }

      this.EventHolder.$emit('startLoading')
      this.isMakingRequest = true

      const endpoint = this.inputs.type === 'Posts' ? search.POSTS : search.PAGES

      return this.$http.get(endpoint + this.inputs.term).then(response => {
        this.results = response.data
        this.EventHolder.$emit('stopLoading')
        this.isMakingRequest = false
      })
    }
  }
}
</script>

<style>
.search-toggle {
  position: fixed;
  top: 50px;
  right: 40px;
  height: 40px;
  width: 40px;
  background: white;
  border-radius: 50%;
  color: grey;
  text-align: center;
  cursor: pointer;
}

.search-toggle span {
  display: block;
  line-height: 50px;
  margin-top: 10px;
  font-size: 18px;
  text-align: center;
}

.search-results {
  padding: 30px;
  margin-top: -30px;
  font-size: 18px;
  line-height: 34px;
  font-style: italic;
}

.search-results ul {
  list-style: none;
  padding: 0;
}

.search-results ul li span {
  float: right;
  color: #a0a0a0;
}

.search-interface input {
  width: calc(100% - 100px);
  padding: 8px 13px;
  font-size: 18px;
  margin: -24px 0 30px 0;
}

.search-interface input:focus,
.search-interface select:focus {
  outline: 0;
}

.search-interface select {
  height: 45px;
  border: 0;
  margin: 0;
  padding: 0 17px;
  margin: -24px 0 0 0px;
  float: left;
}
</style>
