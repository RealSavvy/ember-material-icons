import Ember from 'ember';
import layout from '../templates/components/material-icon';

var MaterialIconComponent = Ember.Component.extend({
  layout: layout,

  tagName: 'i',
  classNames: ['material-icons'],

  iconClass: Ember.computed('icon', 'positionalIcon', function() {
    var icon = this.getWithDefault('positionalIcon', this.get('icon'));
    
    return icon;
  })
});

MaterialIconComponent.reopenClass({
  positionalParams: ['positionalIcon']
});

export default MaterialIconComponent;
