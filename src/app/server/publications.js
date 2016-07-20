/**
 * Created by Packy on 2016/7/15.
 */

import {Meteor} from 'meteor/meteor';
import {Tasks} from './collections';

Meteor.publish('tasks', function() {
    return Tasks.find();
});