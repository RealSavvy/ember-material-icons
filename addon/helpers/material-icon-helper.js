import Ember from 'ember';

export function materialIconHelper(params) {
  if (Ember.isEmpty(params)) return;

  return Ember.String.htmlSafe(`<i class="material-icons">${params[0]}</i>`);
}

export default Ember.Helper.helper(materialIconHelper);
