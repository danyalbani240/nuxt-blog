<template>
  <div class="post-page">
    <h1 class="post-title text-3xl text-center">{{ loadedPost.title }}</h1>
    <img
      class="cover mx-auto"
      src="https://mlmuuous6dwe.i.optimole.com/DfwWcdQ-JK5kWYU6/w:auto/h:auto/q:auto/https://technation.io/wp-content/uploads/2017/11/91F5041A-B5D4-4648-AA55-C39A0DBBAAC3.jpeg"
    />
    <p class="post-content mx-auto mt-20">{{ loadedPost.content }}</p>
  </div>
</template>

<script>
export default {
  asyncData(context) {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve({
          loadedPost: {
            id: 1,
            title: ` post with id: ${context.params.id}`,
            content: ` post is this with id: ${context.params.id} Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi magni optio
              mollitia tenetur ipsa tempora totam, voluptatibus vero adipisci eius
              voluptates, doloremque porro odit eos molestiae itaque voluptate est
              temporibus! Impedit itaque cumque sint sunt a placeat expedita soluta
              nulla aut? Odio maxime blanditiis optio suscipit veritatis. Labore libero,
              quibusdam optio obcaecati placeat, ex tenetur, fuga voluptate perspiciatis
              soluta voluptas totam perferendis laborum adipisci officia sapiente
              aliquam? Sequi inventore ea eius, mollitia culpa accusamus tenetur ad
              consequuntur quae expedita magnam incidunt quia modi porro exercitationem
              doloremque unde laboriosam consectetur delectus perferendis dolore
              nesciunt deleniti quo totam. Ducimus exercitationem id sit.`,
          },
        })
      }, 2000)
    }).then((data) => data)
  },
}
</script>

<style>
.cover {
  height: 400px;
  width: 90%;
  background-size: cover;
}
.post-content {
  width: 90%;
  text-align: justify;
}
</style>
