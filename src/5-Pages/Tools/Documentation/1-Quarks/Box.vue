<template>
  <div class="wrapper">
    <h3><i class="icon far fa-square"></i>Box</h3>
    <h4>Default</h4>
    <div class="box">
      <p>...</p>
    </div>
    <code-highlight type="html" title="Markup">
    &lt;div class="box"&gt;
      ...
    &lt;/div&gt;
    </code-highlight>
    <hr>

    <h4>Panel Combined</h4>
    <div class="box panel is-large">
      <h2 class="is-underlined"><i class="icon fas fa-flask"></i>Box + Large Panel</h2>
      <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nemo reprehenderit ipsam a ducimus repellat.</p>
    </div>
    <div class="box panel">
      <h3 class="is-underlined"><i class="icon fas fa-flask"></i>Box + Default Panel</h3>
      <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nemo reprehenderit ipsam a ducimus repellat.</p>
    </div>
    <div class="box panel is-small">
      <h4 class="is-underlined"><i class="icon fas fa-flask"></i>Box + Small Panel</h4>
      <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nemo reprehenderit ipsam a ducimus repellat.</p>
    </div>
    <code-highlight type="html" title="Markup">
    &lt;div class="box panel [is-small | is-large]"&gt;
      ...
    &lt;/div&gt;
    </code-highlight>
    <hr>

    <h4>Color Themes</h4>
    <div class="row">
      <div class="column">
        <h5>Light Theme</h5>
        <div class="box is-light panel">
          <h2 class="is-underlined"><i class="icon fas fa-flask"></i>H2 Title</h2>
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nemo reprehenderit ipsam a ducimus repellat, laudantium amet, quam, excepturi in nobis rem quisquam repellendus corporis. Animi facere repellendus laudantium iusto voluptatem.</p>
        </div>
        <div class="box is-light panel">
          <h3 class="is-underlined"><i class="icon fas fa-flask"></i>H3 Title</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nemo reprehenderit ipsam a ducimus repellat, laudantium amet, quam, excepturi in nobis rem quisquam repellendus corporis. Animi facere repellendus laudantium iusto voluptatem.</p>
        </div>
        <div class="box is-light panel">
          <h4 class="is-underlined"><i class="icon fas fa-flask"></i>H4 Title</h4>
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nemo reprehenderit ipsam a ducimus repellat, laudantium amet, quam, excepturi in nobis rem quisquam repellendus corporis. Animi facere repellendus laudantium iusto voluptatem.</p>
        </div>
      </div>
      <div class="column">
        <h5>Dark Theme</h5>
        <div class="box is-dark panel">
          <h2 class="is-underlined"><i class="icon fas fa-flask"></i>H2 Title</h2>
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nemo reprehenderit ipsam a ducimus repellat, laudantium amet, quam, excepturi in nobis rem quisquam repellendus corporis. Animi facere repellendus laudantium iusto voluptatem.</p>
        </div>
        <div class="box is-dark panel">
          <h3 class="is-underlined"><i class="icon fas fa-flask"></i>H3 Title</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nemo reprehenderit ipsam a ducimus repellat, laudantium amet, quam, excepturi in nobis rem quisquam repellendus corporis. Animi facere repellendus laudantium iusto voluptatem.</p>
        </div>
        <div class="box is-dark panel">
          <h4 class="is-underlined"><i class="icon fas fa-flask"></i>H4 Title</h4>
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nemo reprehenderit ipsam a ducimus repellat, laudantium amet, quam, excepturi in nobis rem quisquam repellendus corporis. Animi facere repellendus laudantium iusto voluptatem.</p>
        </div>
      </div>
    </div>
    <hr>

    <h4>Custom Layout</h4>
    <div class="box">
      <img src="https://placeimg.com/1200/300/any" alt="">
      <div class="panel is-primary">
        <p class="lead">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nemo reprehenderit ipsam a ducimus repellat, laudantium amet, quam, excepturi in nobis rem quisquam repellendus corporis. Animi facere repellendus laudantium iusto voluptatem.</p>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nemo reprehenderit ipsam a ducimus repellat, laudantium amet, quam, excepturi in nobis rem quisquam repellendus corporis. Animi facere repellendus laudantium iusto voluptatem.</p>
      </div>
    </div>
    <code-highlight type="html" title="Markup">
    &lt;div class="box"&gt;
      &lt;img src="https://placeimg.com/1200/300/any" alt=""&gt;
      &lt;div class="panel"&gt;
        ...
      &lt;/div&gt;
      ...
    &lt;/div&gt;
    </code-highlight>

  </div>
</template>

<script>
export default {

}
</script>
