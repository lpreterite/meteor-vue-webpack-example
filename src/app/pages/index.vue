<template>
    <form @submit.prevent="create">
        <p><input type="text" name="taskname" v-model="taskTitle"> <button>添加任务</button></p>
        <ul>
            <li v-for="task in tasks"><a href="javascript:;">{{task.title}}</a> <a href="#" @click.prevent="remove(task)">[x]</a></li>
        </ul>
    </form>
</template>
<style>
    body{
        background-color:#fff;
    }
</style>
<script>
    import {Meteor} from 'meteor/meteor';
    import {Tasks} from 'server/collections';
    export default{
        data(){
            return{
                tasks: [],
                taskTitle: ""
            }
        },
        methods: {
            create(){
                Meteor.call('tasks.create', this.taskTitle, function(err, _id){
                    if(err){
                        alert('出错了')
                        console.error(err)
                    } else {
                        this.taskTitle = "";
                    }
                }.bind(this))
            },
            remove(task){
                Meteor.call('tasks.remove', task._id)
            }
        },
        route: {
            activate: function(){
                this.subscription = Meteor.subscribe('tasks');
            },
            data: function(transition){
                Tracker.autorun(function () {
                    this.tasks = Tasks.find().fetch()
                }.bind(this))
            },
            deactivate: function(){
                this.subscription.shop()
            }
        }
    }
</script>