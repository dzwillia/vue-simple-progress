<template>
  <div>
    <div class="vue-simple-progress" :style="progress_style">
      <div class="vue-simple-progress-bar" :style="bar_style"></div>
      <div class="vue-simple-progress-text" :style="text_style" v-if="text.length > 0">{{text}}</div>
    </div>
  </div>
</template>

<script>
  var isNumber = function(n) {
    return !isNaN(parseFloat(n)) && isFinite(n)
  }

  export default {
    name: 'vue-simple-progress',
    props: {
      'pct': {
        default: 0
      },
      'size': {
        // either a number (pixel width/height) or 'tiny', 'small',
        // 'medium', 'large', 'huge', 'massive' for common sizes
        default: 'tiny'
      },
      'bg-color': {
        type: String,
        default: '#eee'
      },
      'bar-color': {
        type: String,
        default: '#2196f3' // match .blue color to Material Design's 'Blue 500' color
      },
      'text': {
        type: String,
        default: ''
      },
      'font-size': {
        type: Number,
        default: 13
      },
      'text-fg-color': {
        type: String,
        default: '#222'
      }
    },
    computed: {
      size_px() {
        switch (this.size)
        {
          case 'tiny':    return 2
          case 'small':   return 4
          case 'medium':  return 8
          case 'large':   return 12
          case 'big':     return 16
          case 'huge':    return 32
          case 'massive': return 64
        }

        return isNumber(this.size) ? this.size : 32
      },
      text_font_size() {
        switch (this.size)
        {
          case 'tiny':
          case 'small':
          case 'medium':
          case 'large':
          case 'big':
          case 'huge':
          case 'massive':
            return Math.min(Math.max(Math.ceil(this.size_px*0.4), 11), 32)
        }

        return isNumber(this.fontSize) ? this.fontSize : 13
      },
      progress_style() {
        return {
          'background': this.bgColor
        }
      },
      bar_style() {
        return {
          'background': this.barColor,
          'width': this.pct+'%',
          'height': this.size_px+'px'
        }
      },
      text_style() {
        return {
          'color': this.textFgColor,
          'font-size': this.text_font_size+'px',
          'text-align': 'center'
        }
      }
    }
  }
</script>

<style>
  .vue-simple-progress-bar {
    transition: all 0.15s linear;
  }
</style>
