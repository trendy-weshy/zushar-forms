<template>
 <form class="ui form" novalidate @submit.prevent="saveProps(current)">
      <div class="field">
        <label>Enter the question</label>
        <div class="ui fluid input">
          <input type="text" v-model.lazy="current.label" 
          placeholder="Enter label">
        </div>
      </div>

      <div class="field">
        <label>Enter the question's instruction if any exist</label>
        <div class="ui fluid input">
          <input type="text" v-model.lazy="current.instructions" 
          placeholder="Enter instruction">
        </div>
      </div>

      <div class="field">
        <label>Enter any placeholder for the question input</label>
        <div class="ui fluid input">
          <input type="text" v-model.lazy="current.placeholder" 
          placeholder="Enter placeholder">
        </div>
      </div>

      <div class="field">
        <div class="ui checkbox">
          <input type="checkbox" tabindex="0" class="hidden" 
          v-model.lazy="current.isMandatory" :value="true">
          <label>Should the question be mandatory to answer ?</label>
        </div>
      </div>

      <div class="field">
        <div class="ui checkbox">
          <input type="checkbox" tabindex="0" class="hidden" 
          v-model.lazy="current.validate" :value="true">
          <label>Should the validity of phone number be checked ?</label>
        </div>
      </div>

      <div class="ui divider"></div>

      <button class="ui large labeled icon button" tabindex="0" type="submit">
        <i class="save icon"></i> Save the Properties 
      </button>

    </form>
</template>

<script>
import 'semantic/dist/components/checkbox.js'
import { textInput } from '../../vuex/questionTypes.js'

export default {
  name: 'phonePropertiesEditor',
  props: {
    save: {
      type: Function,
      required: true
    },
    properties: {
      type: Object,
      default: () => { return {} }
    }
  },
  data() {
    return {
      current: Object.assign({}, textInput.phone)
    }
  },
  mounted() {
    if (!_.isEmpty(this.properties)) {
      this.current = Object.assign({}, this.properties)
    }
    $('.ui.checkbox').checkbox();
  },
  methods: {
    saveProps(data) {
      this.save({
        type: 'phone',
        props: Object.assign({}, data)
      });
    }
  }
}
</script>

<style></style>