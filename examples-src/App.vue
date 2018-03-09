<template>
  <div id="app">
    <div class="fixed top-0 w-100 z-1 flex-none flex flex-row items-center pv3 ph4 bg-blue white">
      <div class="flex-fill">
        <a :href="'https://github.com/dzwillia/vue-simple-progress/releases/tag/v'+version" class="white no-underline underline-hover">vue-simple-progress {{version}}</a>
      </div>
      <div class="flex-none">
        <a href="https://github.com/dzwillia/vue-simple-progress" rel="noopener" target="_blank" title="View on Github"><svg xmlns="http://www.w3.org/2000/svg" fill="white" width="32" height="32" viewBox="0 0 16 16"><path d="M8 .198c-4.418 0-8 3.582-8 8 0 3.535 2.292 6.533 5.47 7.59.4.075.548-.173.548-.384 0-.19-.008-.82-.01-1.49-2.227.485-2.696-.943-2.696-.943-.364-.924-.888-1.17-.888-1.17-.726-.497.055-.486.055-.486.802.056 1.225.824 1.225.824.714 1.223 1.872.87 2.328.665.072-.517.28-.87.508-1.07-1.776-.202-3.644-.888-3.644-3.954 0-.874.313-1.588.824-2.148-.083-.202-.357-1.015.077-2.117 0 0 .672-.215 2.2.82.64-.177 1.323-.266 2.003-.27.68.004 1.365.093 2.004.27 1.527-1.035 2.198-.82 2.198-.82.435 1.102.162 1.916.08 2.117.512.56.822 1.274.822 2.147 0 3.072-1.872 3.748-3.653 3.946.288.248.544.735.544 1.48 0 1.07-.01 1.933-.01 2.196 0 .213.145.462.55.384 3.178-1.06 5.467-4.057 5.467-7.59 0-4.418-3.58-8-8-8z"></path></svg></a>
      </div>
    </div>
    <div class="flex-fill" style="padding-bottom: 10rem">
      <!-- allow a 3rem padding when resizing browser horizontally and approaching Tachyon's large media breakpoint (60em) -->
      <div class="mb5 center" style="max-width: 57rem">

        <div class="pt5 nb5" id="basic-progress-bars">
          <a href="#default-spinners" :class="header_cls">
            <h2 class="ma0 pb2 f2 fw4 lh-1">Basic Progress Bars</h2>
            <p class="ma0 lh-copy f6">Progress bars can be used with very little configuration.</p>
          </a>
          <div :class="box_cls" :style="box_style">
            <div :class="label_cls">Basic progress bar</div>
            <progress-bar :val="50" />
          </div>
          <div :class="box_cls" :style="box_style">
            <div :class="label_cls">Basic progress bar with text</div>
            <progress-bar :val="50" text="50%" />
          </div>
        </div>

        <div class="pt5 nb5" id="standard-sizes">
          <a href="#standard-sizes" :class="header_cls">
            <h2 class="ma0 pb2 f2 fw4 lh-1">Text Position</h2>
            <p class="ma0 lh-copy f6">Progress bars can have a label above, inside or below the bar.</p>
          </a>
          <div :class="box_cls" :style="box_style">
            <div :class="label_cls">Text on top</div>
            <progress-bar :val="50" text="50%" text-position="top" />
          </div>
          <div :class="box_cls" :style="box_style">
            <div :class="label_cls">Text in middle</div>
            <progress-bar :val="50" text="50%" text-position="middle" />
          </div>
          <div :class="box_cls" :style="box_style">
            <div :class="label_cls">Text on bottom</div>
            <progress-bar :val="50" text="50%" text-position="bottom" />
          </div>
          <div :class="box_cls" :style="box_style">
            <div :class="label_cls">Text inside bar</div>
            <progress-bar :val="50" text="50%" text-position="inside" text-fg-color="#fff" />
          </div>
        </div>

        <div class="pt5 nb5" id="standard-sizes">
          <a href="#standard-sizes" :class="header_cls">
            <h2 class="ma0 pb2 f2 fw4 lh-1">Standard Sizes</h2>
            <p class="ma0 lh-copy f6">Progress bars come with some standard sizes which size both the bar element as well as the text.</p>
          </a>
          <div :class="box_cls" :style="box_style">
            <div :class="label_cls">Tiny progress bar</div>
            <progress-bar size="tiny" :val="10" text="10%" />
          </div>
          <div :class="box_cls" :style="box_style">
            <div :class="label_cls">Small progress bar</div>
            <progress-bar size="small" :val="20" text="20%" />
          </div>
          <div :class="box_cls" :style="box_style">
            <div :class="label_cls">Medium progress bar</div>
            <progress-bar size="medium" :val="40" text="40%" />
          </div>
          <div :class="box_cls" :style="box_style">
            <div :class="label_cls">Large progress bar</div>
            <progress-bar size="large" :val="60" text="60%" />
          </div>
          <div :class="box_cls" :style="box_style">
            <div :class="label_cls">Big progress bar</div>
            <progress-bar size="big" :val="80" text="80%" />
          </div>
          <div :class="box_cls" :style="box_style">
            <div :class="label_cls">Huge progress bar</div>
            <progress-bar size="huge" :val="90" text="90%" />
          </div>
          <div :class="box_cls" :style="box_style">
            <div :class="label_cls">Massive progress bar</div>
            <progress-bar size="massive" :val="100" text="100%" />
          </div>
        </div>


        <div class="pt5 nb5" id="standard-sizes">
          <a href="#standard-sizes" :class="header_cls">
            <h2 class="ma0 pb2 f2 fw4 lh-1">Real-time updating</h2>
            <p class="ma0 lh-copy f6">Updating the progress bar is as simple as change the `val` prop.</p>
          </a>
          <div :class="box_cls" :style="box_style">
            <div :class="label_cls">Increasing percent (stops at 100%): {{increasing_pct}}%<strong></strong></div>
            <progress-bar size="tiny" :val="increasing_pct" :text="increasing_pct + '%'" />
          </div>
          <div :class="box_cls" :style="box_style">
            <div :class="label_cls">Decreasing percent (stops at 0%): {{decreasing_pct}}%<strong></strong></div>
            <progress-bar size="tiny" :val="decreasing_pct" :text="decreasing_pct + '%'" />
          </div>
          <div :class="box_cls" :style="box_style">
            <div :class="label_cls">Random percent: {{random_pct}}%<strong></strong></div>
            <progress-bar size="tiny" :val="random_pct" :text="random_pct + '%'" />
          </div>
        </div>

      </div>
    </div>
  </div>
</template>

<script>
  import ProgressBar from '../src/components/Progress.vue'

  export default {
    name: 'app',
    components: {
      ProgressBar
    },
    data() {
      return {
        random_pct: 0,
        increasing_pct: 0,
        decreasing_pct: 100,
        is_paused: false
      }
    },
    computed: {
      version() {
        return VERSION
      },
      header_cls() {
        return 'db mt5 pb3 dark-gray hover-blue lh-1 no-underline'
      },
      box_cls() {
        return 'db pt3 pb4 ph3 ph0-l relative'
      },
      box_style() {
        return 'min-height: 100px'
      },
      label_cls() {
        return 'mb4 f6 fw6 dark-gray'
      },
      cell_cls() {
        return 'ph1 pv1 ba b--moon-gray'
      }
    },
    mounted() {
      setInterval(() => {
        if (this.is_paused)
          return

        this.random_pct = Math.ceil(Math.random() * 100)
        this.increasing_pct = Math.min(this.increasing_pct + 2, 100)
        this.decreasing_pct = Math.max(this.decreasing_pct - 2, 0)
      }, 2000)
    }
  }
</script>

<style>
  html, body {
    font-family: 'Open Sans', 'Helvetica Neue', Helvetica, Arial, sans-serif;
    font-size: 100%;
  }

  html {
    height: 100%;
  }

  body {
    overflow: auto;
    position: relative;
  }

  .b--moon-gray {
    border-color: #ccc;
  }

  .flex-fill {
    flex: 1 1;
    min-width: 0; /* 1 */
    min-height: 0; /* 1 */
  }

  .darken-10:hover,
  .darken-10:focus {
    box-shadow: inset 9999px 9999px rgba(0,0,0,0.10)
  }

  .darken-10:active {
    box-shadow: inset 9999px 9999px rgba(0,0,0,0.20)
  }

  .lh-1 {
    line-height: 1;
  }
</style>
