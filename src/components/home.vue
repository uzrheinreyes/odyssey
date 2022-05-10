<template>
<div class="logo">
    <img :src="logotype" class="logotype">
    <div class="home">
        <div class="content">
            <h1 class="title mt-4 mb-4">Your blogs</h1>
            <a href="/create-blog" class="create-button">New Blog +</a>
            <div v-for="blogs in blogs" :key="blogs._id">
                <div class="card mt-4">
                    <div class="card-body">
                        <div id="card-content">
                            <div>
                                <img :src="pic1" class="pic1">
                            </div>
                            <div class="mt-1">
                                <h4 class="card-title">{{ blogs.title }}</h4>
                                <div class="card-subtitle text-">{{ blogs.desc }}</div>
                            </div>
                        </div>
                        <div id="buttons" class="mt-2">
                            <a href="/read-blog" class="read-button">Read more</a>
                            <a href="/edit-blog/:id" class="update-button">Update</a>
                            <a href="/delete-blog" class="delete-button">Delete</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>
</template>

<script>
import axios from "axios"
export default {
    data: function() {
        return {
            logotype: require('../assets/odyssey-logotype.png'),
            pic1: require("../assets/odyssey-home.jpg"),
            blogs: []
        }
    },
    created() {
        let apiURL = 'http://localhost:4000/api';
        axios.get(apiURL).then((res) => {
            this.blogs = res.data;
        }).catch(error => {
            console.log(error)
        })
    }
}
</script>

<style scoped>
    .logo {
        margin: 0 0 0 200px;
    }

    .home {
        max-width: 1000px;
        margin: 0 auto;
    }

    .logotype {
        width: 450px;
    }

    .pic1 {
        width: 272px;
        padding: 10px;
        display: inline-block;
        border-radius: 20px;
    }

    #buttons {
        display: block;
    }

    #card-content {
        display: flex;
    }

    #update {
        color: white;
    }

    .create-button, .read-button, .update-button, .delete-button {
        background-color: #ad96ed;
        color: white;
        text-decoration: none;
        padding: 10px;
        border-radius: 6px;
    }

    .read-button {
        background-color: #a286b1;
        margin-left: 10px;
    }

    .update-button {
        background: #603974;
        margin-left: 5px;
    }

    .delete-button {
        background: rgb(154, 153, 153);
        margin-left: 5px;
    }

</style>
