<template>
  <nuxt-link v-if="!admin" :to="`posts/${id}`">
    <div class="post-preview">
      <img class="thumbnail" :src="thumbnail" alt="" />
      <div class="pre-content overflow-hidden">
        <h3 class="pre-title text-2xl">{{ title }}</h3>
        <p class="pre-content text-sm text-center">
          {{ content }}
        </p>
      </div>
    </div>
  </nuxt-link>
  <nuxt-link v-else :to="`admin/${id}`">
    <div class="post-preview">
      <img class="thumbnail" :src="thumbnail" alt="" />
      <div class="pre-content overflow-hidden">
        <h3 class="pre-title text-2xl">{{ title }}</h3>
        <p ref="content" class="pre-content text-sm text-center">
          {{ content }}
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
    document.querySelector('p.pre-content').innerText =
      document.querySelector('p.pre-content').innerText.slice(0, 99) + '...'
  },
}
</script>

<style>
.post-preview {
  border: 1px solid black;
  width: 400px;
  height: 300px;
}
.thumbnail {
  width: 100%;
  height: 200px;
}
.pre-content {
  height: 100px;
}
h3 {
  text-align: center;
}
</style>
