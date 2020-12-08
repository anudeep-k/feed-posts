import express from 'express';
import {getPosts,createPost,updatePost,deletePost} from '../controllers/posts.js'

const router =express.Router();


router.get('/',getPosts);

router.post('/createPosts',createPost)

router.patch('/updatePosts/:id',updatePost)

router.delete('/delete/:id',deletePost)


export default router;