<template>
    <div class="read">
        <div class="card mt-4 px-4">
            <div class="mt-1" v-for="blogs in blogs" :key="blogs._id">
            <h1 class="mt-4">{{ blogs.title }}</h1><br>
                <div>
                    <a href="/" class="btn btn-secondary">Back</a>
                    <a href="/edit-blog/:id" class="btn btn-warning" id="update">Update</a>
                </div>
                <h5 class="card mt-4 px-4 py-4">{{ blogs.desc }}</h5><br>
                <h5 class="card mt-1 px-4 py-4">{{ blogs.mkdown }}</h5>
            </div><br><br>
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
    .read {
        max-width: 800px;
        margin: 0 auto;
    }

     #update {
        color: white;
    }
</style>