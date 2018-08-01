<template lang="html">
  <div class="wrapper">
    <h3><i class="icon fas fa-exclamation-triangle"></i>Notification</h3>
    <h4>Default</h4>
    <button-default @click.native="openNotification(notifDefault)">Default Notification</button-default>
    <hr>

    <h4>Auto-Close <small>with timer</small></h4>
    <button-default @click.native="openNotification(notifAutoClose)">Auto-Close</button-default>
    <br>

    <h4>Types</h4>
    <button-default color="info" icon-left="fas fa-info" @click.native="openNotification(info)">Info</button-default>
    <button-default color="success" icon-left="fas fa-check" @click.native="openNotification(success)">Success</button-default>
    <button-default color="error" icon-left="fas fa-times" @click.native="openNotification(error)">Error</button-default>
    <button-default color="warning" icon-left="fas fa-exclamation-triangle" @click.native="openNotification(warning)">Warning</button-default>
    <hr>

    <h4>Size</h4>
    <button-default size="small" @click.native="openNotification(notifSmall)">Small Notification</button-default>
    <button-default @click.native="openNotification(notifDefault)">Default Notification</button-default>
    <button-default size="large" @click.native="openNotification(notifLarge)">Large Notification</button-default>
    <hr>

    <h4>Position</h4>
    <button-default @click.native="openNotification(notifTop)">Top Notification</button-default>

    <notification
    :type.sync="this.type"
    :size.sync="this.size"
    :position.sync="this.position"
    :content.sync="this.content"
    :options.sync="this.options"
    :show.sync="showNotification"
    @close="closeNotification">
    </notification>
    <code-highlight type="html" title="Markup">
    &lt;button @click.native=&quot;openNotification(notification)&quot;&gt; ... &lt;/button&gt;
    </code-highlight>
    <code-highlight type="html" title="Markup">
    &lt;notification :type="type" :size="size" :position="position" :content="content" :options="options" :show.sync="showNotification"&gt;
    &lt;/notification&gt;
    </code-highlight>

  </div>
</template>

<script>
export default {
  data () {
    return {
      type: '',
      size: '',
      position: '',
      content: {},
      options: {},
      showNotification: false,

      notifDefault: {
        content: {
          title: 'Default Notification',
          text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
        }
      },

      notifAutoClose: {
        content: {
          title: 'Auto-Close Notification',
          text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
        },
        options: {
          autoClose: true,
          countdownBar: true
        }
      },

      notifTop: {
        position: 'top',
        content: {
          title: 'Top Notification',
          text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
        },
        options: {
          autoClose: true,
          countdownBar: true
        }
      },

      notifSmall: {
        size: 'small',
        content: {
          title: 'Small Notification',
          text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit.'
        },
        options: {
          autoClose: true,
          countdownBar: true
        }
      },

      notifLarge: {
        size: 'large',
        content: {
          title: 'Large Notification',
          text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
        },
        options: {
          autoClose: true,
          countdownBar: true
        }
      },

      info: {
        type: 'info',
        content: {
          title: 'Information',
          text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
        },
        options: {
          autoClose: true,
          countdownBar: true
        }
      },

      success: {
        type: 'success',
        content: {
          title: 'Success',
          text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
        },
        options: {
          autoClose: true,
          countdownBar: true
        }
      },

      warning: {
        type: 'warning',
        content: {
          title: 'Warning',
          text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit !'
        },
        options: {
          autoClose: true,
          countdownBar: true
        }
      },

      error: {
        type: 'error',
        content: {
          title: 'Error',
          text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit...'
        },
        options: {
          autoClose: true,
          countdownBar: true
        }
      }
    }
  },
  methods: {
    openNotification (notification) {
      this.showNotification = true
      this.options = notification.options
      this.content = notification.content
      this.type = notification.type
      this.size = notification.size
      this.position = notification.position
    },
    closeNotification () {
      this.showNotification = false
      this.options = { }
      this.content = { }
    }
  }
}
</script>

<style lang="scss">

</style>
