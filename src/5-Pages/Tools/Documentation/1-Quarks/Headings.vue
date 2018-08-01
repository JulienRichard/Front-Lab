<template>
  <div>
    <div class="wrapper">
      <h3><i class="icon fas fa-heading"></i>Headings</h3>
      <h4>Basics Titles</h4>
      <h1>h1# Lorem ipsum <small>dolor sit amet</small></h1>
      <h2>h2# Lorem ipsum <small>dolor sit amet</small></h2>
      <h3>h3# Lorem ipsum <small>dolor sit amet</small></h3>
      <h4>h4# Lorem ipsum <small>dolor sit amet</small></h4>
      <h5>h5# Lorem ipsum <small>dolor sit amet</small></h5>
      <h6>h6# Lorem ipsum <small>dolor sit amet</small></h6>
      <code-highlight type="html" title="Markup">
      &lt;h#&gt;Lorem ipsum &lt;small&gt;dolor sit amet&lt;/small&gt;&lt;/h#&gt;
      &lt;h# class="like-h#"&gt;Lorem ipsum &lt;small&gt;dolor sit amet&lt;/small&gt;&lt;/h#&gt;
      </code-highlight>
      <hr>

      <!-- Title + Icon -->
      <h4>Title + Icon</h4>
      <h1><i class="icon fas fa-flask"></i>Lorem ipsum</h1>
      <h2><i class="icon fas fa-comments"></i>Lorem ipsum</h2>
      <h3><i class="icon fas fa-cube"></i>Lorem ipsum</h3>
      <h4><i class="icon fas fa-cog"></i>Lorem ipsum</h4>
      <h5><i class="icon fas fa-flag"></i>Lorem ipsum</h5>
      <h6><i class="icon fas fa-hashtag"></i>Lorem ipsum</h6>
      <code-highlight type="html" title="Markup">
      &lt;h#&gt;&lt;i class="icon {icon-name}"&gt;&lt;/i&gt;Lorem ipsum&lt;/h#&gt;
      </code-highlight>
      <hr>

      <!-- Subtitle -->
      <h4>Subtitle class</h4>
      <h1>Lorem ipsum <small class="subtitle">consectetur adipisicing elit</small></h1>
      <h2>Lorem ipsum <small class="subtitle">consectetur adipisicing elit</small></h2>
      <h3>Lorem ipsum <small class="subtitle">consectetur adipisicing elit</small></h3>
      <h4>Lorem ipsum <small class="subtitle">consectetur adipisicing elit</small></h4>
      <h5>Lorem ipsum <small class="subtitle">consectetur adipisicing elit</small></h5>
      <h6>Lorem ipsum <small class="subtitle">consectetur adipisicing elit</small></h6>
      <code-highlight type="html" title="Markup">
      &lt;h#&gt;Lorem ipsum &lt;small class="subtitle"&gt;Subtitle&lt;/small&gt;&lt;/h#&gt;
      </code-highlight>
      <hr>

      <h4>Title + Icon + Subtitle</h4>
      <h1><i class="icon fas fa-flask"></i>Lorem ipsum <small class="subtitle">dolor sit amet</small></h1>
      <h2><i class="icon fas fa-comments"></i>Lorem ipsum <small class="subtitle">dolor sit amet</small></h2>
      <h3><i class="icon fas fa-cube"></i>Lorem ipsum <small class="subtitle">dolor sit amet</small></h3>
      <h4><i class="icon fas fa-cog"></i>Lorem ipsum <small class="subtitle">dolor sit amet</small></h4>
      <h5><i class="icon fas fa-flag"></i>Lorem ipsum <small class="subtitle">dolor sit amet</small></h5>
      <h6><i class="icon fas fa-hashtag"></i>Lorem ipsum <small class="subtitle">dolor sit amet</small></h6>
      <code-highlight type="html" title="Markup">
      &lt;h1&gt;&lt;i class="icon {icon-name}"&gt;&lt;/i&gt;Lorem ipsum &lt;small class="subtitle"&gt;dolor sit amet&lt;/small&gt;&lt;/h1&gt;
      </code-highlight>

      <h5>Align Center</h5>
      <h1 class="text-center"><i class="icon fas fa-flask"></i>Lorem ipsum <small class="subtitle">dolor sit amet</small></h1>
      <h2 class="text-center"><i class="icon fas fa-comments"></i>Lorem ipsum <small class="subtitle">dolor sit amet</small></h2>
      <h3 class="text-center"><i class="icon fas fa-cube"></i>Lorem ipsum <small class="subtitle">dolor sit amet</small></h3>
      <h4 class="text-center"><i class="icon fas fa-cog"></i>Lorem ipsum <small class="subtitle">dolor sit amet</small></h4>
      <h5 class="text-center"><i class="icon fas fa-flag"></i>Lorem ipsum <small class="subtitle">dolor sit amet</small></h5>
      <h6 class="text-center"><i class="icon fas fa-hashtag"></i>Lorem ipsum <small class="subtitle">dolor sit amet</small></h6>
      <code-highlight type="html" title="Markup">
      &lt;h1 class="text-center"&gt;&lt;i class="icon {icon-name}"&gt;&lt;/i&gt;Lorem ipsum &lt;small class="subtitle"&gt;dolor sit amet&lt;/small&gt;&lt;/h1&gt;
      </code-highlight>
      <hr>

      <h4>Underlined</h4>
      <h1 class="is-underlined"><i class="icon fas fa-flask"></i>Lorem ipsum</h1>
      <h2 class="is-underlined"><i class="icon fas fa-comments"></i>Lorem ipsum</h2>
      <h3 class="is-underlined"><i class="icon fas fa-cube"></i>Lorem ipsum</h3>
      <h4 class="is-underlined"><i class="icon fas fa-cog"></i>Lorem ipsum</h4>
      <h5 class="is-underlined"><i class="icon fas fa-flag"></i>Lorem ipsum</h5>
      <h6 class="is-underlined"><i class="icon fas fa-hashtag"></i>Lorem ipsum</h6>
      <code-highlight type="html" title="Markup">
      &lt;h# class="is-underlined"&gt;...&lt;/h#&gt;
      </code-highlight>
      <hr>
      <h4>Light Theme</h4>
      <div class="box is-light">
        <h2 class="is-underlined"><i class="icon fas fa-comments"></i>Lorem ipsum <small>dolor sit amet</small></h2>
        <h3 class="is-underlined"><i class="icon fas fa-cube"></i>Lorem ipsum <small>dolor sit amet</small></h3>
        <h4 class="is-underlined"><i class="icon fas fa-cog"></i>Lorem ipsum <small>dolor sit amet</small></h4>
        <h5><i class="icon fas fa-flag"></i>Lorem ipsum <small class="subtitle">dolor sit amet</small></h5>
        <h6><i class="icon fas fa-hashtag"></i>Lorem ipsum <small class="subtitle">dolor sit amet</small></h6>
      </div>

      <h4>Dark Theme</h4>
      <div class="box is-dark">
        <h2 class="is-underlined"><i class="icon fas fa-comments"></i>Lorem ipsum <small>dolor sit amet</small></h2>
        <h3 class="is-underlined"><i class="icon fas fa-cube"></i>Lorem ipsum <small>dolor sit amet</small></h3>
        <h4 class="is-underlined"><i class="icon fas fa-cog"></i>Lorem ipsum <small>dolor sit amet</small></h4>
        <h5><i class="icon fas fa-flag"></i>Lorem ipsum <small class="subtitle">dolor sit amet</small></h5>
        <h6><i class="icon fas fa-hashtag"></i>Lorem ipsum <small class="subtitle">dolor sit amet</small></h6>
      </div>
      <code-highlight type="html" title="Markup">
      &lt;div class="box [is-light / is-dark]"&gt; &lt;h#&gt;...&lt;/h#&gt; &lt;/div&gt;
      </code-highlight>
    </div>
</div>
</template>

<script>
export default {

}
</script>
