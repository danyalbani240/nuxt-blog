<template>
  <nuxt-link v-if="!admin" :to="`posts/${id}`">
    <div class="post-preview">
      <img class="thumbnail" :src="thumbnail" alt="" />
      <div class="pre-content-container overflow-hidden">
        <h3 class="pre-title text-2xl">{{ title }}</h3>
        <p class="pre-content text-sm text-center">
          {{ slicedContent }}
        </p>
      </div>
    </div>
  </nuxt-link>
  <nuxt-link v-else :to="`admin/${id}`">
    <div class="post-preview">
      <img class="thumbnail" :src="thumbnail" alt="" />
      <div class="pre-content text-left overflow-hidden">
        <h3 class="pre-title text-2xl">{{ title }}</h3>
        <p ref="content" class="pre-content text-sm text-left">
          {{ slicedContent }}
        </p>
      </div>
    </div>
  </nuxt-link>
</template>

<script>
export default {
  props: {
    thumbnail: {
      type: String,
      required: true,
    },
    title: {
      type: String,
      required: true,
    },
    content: {
      type: String,
      required: true,
    },

    admin: {
      type: Boolean,
      default: false,
    },
    id: {
      type: String,
      required: true,
    },
  },
  mounted() {
    document.querySelectorAll('p.pre-content').innerText =
      document.querySelector('p.pre-content').innerText.slice(0, 99) + '...'
  },
  computed: {
    slicedContent() {
      return this.content.slice(0, 99)
    },
  },
}
</script>

<style scoped>
.post-preview {
  width: 333px;
  height: 300px;
}
a:first-child {
  width: 100%;
  margin-bottom: 70px;
  height: 385px;
}
a:first-child .post-preview {
  display: flex;
  width: 100%;
}
a:first-child .post-preview .pre-content-container {
  margin-left: 30px;
}
a:first-child .post-preview .pre-content-container h3 {
  font-weight: 500;
  font-size: 46px;
  line-height: 54px;
  letter-spacing: 0px;
  color: #121212;
  margin-bottom: 16px;
  text-align: left;
}
a:first-child .post-preview .pre-content-container p {
  font-size: 16px;
  line-height: 26px;
  color: #323947;
  font-weight: 200;
  text-align: left;
}
a:first-child img.thumbnail {
  width: 80%;
  height: 385px !important;
}
.thumbnail {
  width: 333px;
  height: 200px;
  border-radius: 8px;
}
.pre-content {
  height: 100px;
}
</style>
