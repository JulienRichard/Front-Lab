<template lang="html">
  <div>
    <menu-foundation id="documentation-menu" align="expanded" type="dropdown">
      <menu-foundation title="Quarks" to="/">
        <img slot="beforetitle" src="../../assets/img/icons/quark.svg" alt="" class="icon is-svg is-align-top">
        <menu-foundation title="Typography">
          <span slot="beforetitle"><i class="icon fa-font is-align-left" aria-hidden="true"></i></span>
          <menu-foundation-item to="/Documentation/1-Quarks/Typography" icon-left="fa-font">Global Typography</menu-foundation-item>
          <menu-foundation-item to="/Documentation/1-Quarks/Headers" icon-left="fa-header">Headers</menu-foundation-item>
        </menu-foundation>
        <menu-foundation title="Layout">
          <span slot="beforetitle"><i class="icon fa-crop is-align-left" aria-hidden="true"></i></span>
          <menu-foundation-item to="/Documentation/1-Quarks/Sections" icon-left="fa-square-o">Sections</menu-foundation-item>
          <menu-foundation-item to="/Documentation/1-Quarks/Wrapper" icon-left="fa-square">Wrapper</menu-foundation-item>
          <menu-foundation-item to="/Documentation/1-Quarks/Grid" icon-left="fa-th-large">Grid</menu-foundation-item>
          <menu-foundation-item to="/Documentation/1-Quarks/Panels" icon-left="fa-th">Panels</menu-foundation-item>
        </menu-foundation>
        <menu-foundation title="Base Styles">
          <span slot="beforetitle"><i class="icon fa-puzzle-piece is-align-left" aria-hidden="true"></i></span>
          <menu-foundation-item to="/Documentation/1-Quarks/Icons" icon-left="fa-flag">Icons</menu-foundation-item>
          <menu-foundation-item to="/Documentation/1-Quarks/Forms" icon-left="fa-i-cursor">Forms</menu-foundation-item>
          <menu-foundation-item to="/Documentation/1-Quarks/Lists" icon-left="fa-list">Lists</menu-foundation-item>
          <menu-foundation-item to="/Documentation/1-Quarks/Tables" icon-left="fa-table">Tables</menu-foundation-item>
          <menu-foundation-item to="/Documentation/1-Quarks/Menu" icon-left="fa-bars">Menu</menu-foundation-item>
          <menu-foundation-item to="/Documentation/1-Quarks/Box" icon-left="fa-th">Box</menu-foundation-item>
        </menu-foundation>
        <menu-foundation title="Tools">
          <span slot="beforetitle"><i class="icon fa-cogs is-align-left" aria-hidden="true"></i></span>
          <menu-foundation-item to="/Documentation/1-Quarks/MediaQueries" icon-left="fa-cog">Media Queries</menu-foundation-item>
          <menu-foundation-item to="/Documentation/1-Quarks/Visibility" icon-left="fa-cog">Visibility</menu-foundation-item>
          <menu-foundation-item to="/Documentation/1-Quarks/Sticky" icon-left="fa-cog">Sticky</menu-foundation-item>
          <menu-foundation-item to="/Documentation/1-Quarks/Tooltip" icon-left="fa-cog">Tooltip</menu-foundation-item>
          <menu-foundation-item to="/Documentation/1-Quarks/Parallax" icon-left="fa-cog">Parallax</menu-foundation-item>
        </menu-foundation>
      </menu-foundation>

      <menu-foundation title="Atoms">
        <img slot="beforetitle" src="../../assets/img/icons/atom.svg" alt="" class="icon is-svg is-align-top">
        <menu-foundation-item to="/Documentation/2-Atoms/Badge" icon-left="fa-certificate">Badge</menu-foundation-item>
        <menu-foundation-item to="/Documentation/2-Atoms/Tag" icon-left="fa-tag">Tag</menu-foundation-item>
        <menu-foundation title="Buttons">
          <span slot="beforetitle"><i class="icon fa-mouse-pointer is-align-left" aria-hidden="true"></i></span>
          <menu-foundation-item to="/Documentation/2-Atoms/Button-Default" icon-left="fa-mouse-pointer">Button Default</menu-foundation-item>
          <menu-foundation-item to="/Documentation/2-Atoms/Button-Icon" icon-left="fa-mouse-pointer">Button Icon</menu-foundation-item>
          <menu-foundation-item to="/Documentation/2-Atoms/Button-Menu" icon-left="fa-bars">-- Button Menu</menu-foundation-item>
        </menu-foundation>
        <menu-foundation-item to="/Documentation/2-Atoms/Box" icon-left="fa-square-o">Box</menu-foundation-item>
        <menu-foundation-item to="/Documentation/2-Atoms/Thumbnail" icon-left="fa-picture-o">Thumbnail</menu-foundation-item>
      </menu-foundation>

      <menu-foundation title="Molecules">
        <img slot="beforetitle" src="../../assets/img/icons/molecule.svg" alt="" class="icon is-svg is-align-top">
        <menu-foundation-item to="/Documentation/3-Molecules/Button-Group" icon-left="fa-mouse-pointer">Button-Group</menu-foundation-item>
        <menu-foundation-item to="/Documentation/3-Molecules/Tabs" icon-left="fa-exclamation-circle">Tabs</menu-foundation-item>
        <menu-foundation-item to="/Documentation/3-Molecules/Notification" icon-left="fa-exclamation-circle">-- Notification</menu-foundation-item>
        <menu-foundation-item to="/Documentation/3-Molecules/Modal" icon-left="fa-window-maximize">Modal</menu-foundation-item>
        <menu-foundation-item to="/Documentation/3-Molecules/MenuDropdown" icon-left="fa-bars">Menu Dropdown</menu-foundation-item>
        <menu-foundation-item to="/Documentation/3-Molecules/Pagination" icon-left="fa-ellipsis-h">Pagination</menu-foundation-item>
        <menu-foundation-item to="/Documentation/3-Molecules/Breadcrumbs" icon-left="fa-ellipsis-h">Breadcrumbs</menu-foundation-item>
        <menu-foundation-item to="/Documentation/3-Molecules/Slick" icon-left="fa-arrows-h">Slick</menu-foundation-item>
        <menu-foundation-item to="/Documentation/3-Molecules/Gallery" icon-left="fa-eye">Gallery</menu-foundation-item>
        <menu-foundation-item to="/Documentation/3-Molecules/Card" icon-left="fa-square-o">Card</menu-foundation-item>
      </menu-foundation>

      <menu-foundation title="Organisms">
        <img slot="beforetitle" src="../../assets/img/icons/organism.svg" alt="" class="icon is-svg is-align-top">
        <menu-foundation-item to="/Documentation/4-Organisms/TopBar" icon-left="fa-window-maximize">Topbar</menu-foundation-item>
        <menu-foundation-item to="/Documentation/4-Organisms/Footer" icon-left="fa-window-minimize">Footer</menu-foundation-item>
        <menu-foundation title="Blog">
          <span slot="beforetitle"><i class="icon fa-newspaper-o is-align-left" aria-hidden="true"></i></span>
          <menu-foundation-item to="/Documentation/4-Organisms/Post-Item" icon-left="di-article">Post Item</menu-foundation-item>
          <menu-foundation-item to="/Documentation/4-Organisms/Post-List" icon-left="di-blog">Post List</menu-foundation-item>
          <!--<menu-foundation-item to="/Documentation/4-Organisms/Post-List-Gallery" icon-left="di-blog">Post List Gallery</menu-foundation-item>-->
          <!--<menu-foundation-item to="/Documentation/4-Organisms/Post-List-Router" icon-left="di-blog">Post List + VueRouter</menu-foundation-item>-->
          <!--<menu-foundation-item to="/Documentation/4-Organisms/Post-List-Isotope" icon-left="di-blog">Post List + Isotope</menu-foundation-item>-->
        </menu-foundation>
        <menu-foundation title="Galery">
          <menu-foundation-item to="/Documentation/4-Organisms/Mosaic">-- Mosaic</menu-foundation-item>
        </menu-foundation>
      </menu-foundation>
    </menu-foundation>
  </div>
</template>

<script>
export default {

}
</script>
