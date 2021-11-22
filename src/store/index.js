import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    postList:[
        {
            id:1,
            title: "I think it's going to rain",
            img_link:"https://i.imgur.com/JGwvZyW.jpg",
            profile_picture:"https://cdn4.iconfinder.com/data/icons/e-commerce-181/512/477_profile__avatar__man_-512.png",
            timestamp: "Sep 18, 2020 15:16",
            numberOfLikes: 0
        },
        {
            id:2,
            title: "Hello world1",
            profile_picture:"https://cdn4.iconfinder.com/data/icons/e-commerce-181/512/477_profile__avatar__man_-512.png",
            timestamp: "Sep 19, 2020 15:16",
            numberOfLikes: 0
        },
        {
            id:3,
            title: "Hello world2",
            profile_picture:"https://cdn4.iconfinder.com/data/icons/e-commerce-181/512/477_profile__avatar__man_-512.png",
            timestamp: "Sep 20, 2020 15:16",
            numberOfLikes: 0
        },
        {
            id:4,
            title: "Hello world3",
            profile_picture:"https://cdn4.iconfinder.com/data/icons/e-commerce-181/512/477_profile__avatar__man_-512.png",
            timestamp: "Sep 21, 2020 15:16",
            numberOfLikes: 0
        },
        {
            id:5,
            title: "Hello world4",
            profile_picture:"https://cdn4.iconfinder.com/data/icons/e-commerce-181/512/477_profile__avatar__man_-512.png",
            timestamp: "Sep 22, 2020 15:16",
            numberOfLikes: 0
        },
        {
            id:6,
            title: "Hello world5",
            profile_picture:"https://cdn4.iconfinder.com/data/icons/e-commerce-181/512/477_profile__avatar__man_-512.png",
            timestamp: "Sep 23, 2020 15:16",
            numberOfLikes: 0
        },
        {
            id:7,
            title: "Hello world6",
            profile_picture:"https://cdn4.iconfinder.com/data/icons/e-commerce-181/512/477_profile__avatar__man_-512.png",
            timestamp: "Sep 24, 2020 15:16",
            numberOfLikes: 0
        },
        {
            id:8,
            title: "Hello world7",
            profile_picture:"https://cdn4.iconfinder.com/data/icons/e-commerce-181/512/477_profile__avatar__man_-512.png",
            timestamp: "Sep 25, 2020 15:16",
            numberOfLikes: 0
        },
        {
            id:9,
            title: "Which weighs more, a pound of feathers or a pound of bricks",
            profile_picture:"https://cdn4.iconfinder.com/data/icons/e-commerce-181/512/477_profile__avatar__man_-512.png",
            timestamp: "Sep 18, 2020 15:16",
            numberOfLikes: 0
      
        },
        { 
            id:10,
            title: "Felt cute, might delete later",
            img_link:"https://i.redd.it/bbp3eccaq6u71.jpg",
            profile_picture:"https://cdn4.iconfinder.com/data/icons/e-commerce-181/512/477_profile__avatar__man_-512.png",
            timestamp: "Sep 18, 2020 17:18",
            numberOfLikes: 0
        }
       

    ]
  },
  mutations: {
    increment (state, postId) {
      // mutate state
      state.postList.forEach(post => {
          if(post.id === postId){
            post.numberOfLikes =1+ post.numberOfLikes;
          }
      });
    },
    nullify (state) {
        // mutate state
        state.postList.forEach((i) => i.numberOfLikes=0);
      }
  },
  getters:{}
})
