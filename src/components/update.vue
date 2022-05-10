<template>
    <div class="update">
        <img :src="logo" class="logo">
        <h1 class="title">Update Blog</h1>
        <form @submit.prevent = handleUpdateForm>
        <div class="form-group">
            <label for="file" class="image">Choose a photo +</label><br>
            <input type="file" id="file" accept="image/*"><br>
        </div>

        <div class="form-group">
            <label for="title" class="mt-4">Title</label>
            <input type="text" name="title" id="title" class="form-control" v-model="blogs.title" required>
        </div>

        <div class="form-group">
            <label for="description">Description</label>
            <textarea name="description" id="description" class="form-control" v-model="blogs.desc" required></textarea>
        </div>

        <div class="form-group">
            <label for="markdown">Markdown</label>
            <textarea type="text" name="markdown" id="markdown" class="form-control" v-model="blogs.mkdown" required></textarea>
        </div>
        <div class="form-group">
            <a href="/" class="btn btn-secondary mt-4" id="cancel-button">Cancel</a>
            <button class="btn btn-primary mt-4" id="update-button">Save</button>
        </div>
        </form>
    </div>
</template>

<script>
import axios from 'axios';
export default ({
    data() {
        return {
            blogs: { },
            logo: require('../assets/odyssey-logo.png')
        }
    },
    created() {
        let apiURL = `http://localhost:4000/api/edit-blog/${this.$route.params.id}`;

        axios.get(apiURL).then((res) => {
            this.blogs = res.data;
        })
    },
    methods: {
        handleUpdateForm() {
            let apiURL = `http://localhost:4000/api/update-blog/${this.$route.params.id}`;

            axios.put(apiURL, this.blogs).then((res) => {
                console.log(res)
                this.$router.push('/')
            }).catch(error => {
                console.log(error)
            });
        }
    }
})
</script>

<style scoped>
    .logo {
        position: absolute;
        z-index: -1;
        width: 700px;
        margin: 50px 400px;
    }

    .update {
        max-width: 800px;
        margin: 100px auto;
    }

    input[type="file"] {
        display: none;
    }

    .image {
        color: white;
        height: 40px;
        width: 150px;
        background-color: #ad96ed;
        display: flex;
        justify-content: center;
        align-items: center;
        margin: auto;
        border-radius: 6px;
        cursor: pointer;
        position: absolute;
        margin-top: 20px;
    }

    #update-button {
        background-color: #603974;
    }

    #cancel-button {
        background-color: rgb(154, 153, 153);
    }
</style>