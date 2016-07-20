/**
 * Created by Packy on 2016/7/15.
 */

import {Meteor} from 'meteor/meteor';
import {Tasks, Tags} from './collections';

Meteor.methods({
    'tasks.complete': function(_id, complete){
        Tasks.update({_id: _id}, {
            $set: {
                complete: complete,
                updateAt: new Date()
            }
        })
    },
    'tasks.create': function(title){
        check(title, String);
        let _id = Tasks.insert({
            title,
            createAt: new Date()
        })

        return _id
    },
    'tasks.remove': function(_id){
        check(_id, String);
        Tasks.remove(_id);
    }
})