<template>
    <div class="delete">
        <div class="warning-zone">
            <h1 class="title">Delete this blog?</h1>
            <h5 class="subtitle">This action can not be undone.</h5>
            <button @click.prevent="deleteBlog(blogs._id)" class="btn btn-danger mt-4">Yes</button>
            <a href="/" class="btn btn-secondary mt-4">Cancel</a>
        </div>
    </div>
</template>

<script>
import axios from 'axios'
export default {
    data() {
        return {
            blogs: []
        }
    },
    created() {
        let apiURL = 'http://localhost:4000/api/';
        axios.get(apiURL).then((res) => {
            this.blogs = res.data;
        }).catch(error => {
            console.log(error)
        })
    },
    methods: {
        deleteBlog(id) {
            let apiURL = 'http://localhost:4000/api/delete-blog/$(id)';
            let indexOfArrayItem = this.blogs.findIndex(i => i._id === id);
            if (window.confirm("Confirm Delete")) {
                axios.delete(apiURL).then(() => {
                    this.blogs.splice(indexOfArrayItem, 1);
                }).catch(error => {
                    console.log(error)
                })
            }
        }
    }
}
</script>

<style scoped>
    .delete {
        max-width: 1000px;
        margin: 100px auto;
    }

    .warning-zone {
        background-color: rgb(243, 179, 179);
        padding: 20px;
        border-radius: 20px;
    }

    .subtitle {
        color: rgb(86, 86, 86);
    }
</style>