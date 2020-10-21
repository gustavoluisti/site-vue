export default {
  data() {
    return {
      loading: true,
      api: null
    };
  },
  methods: {
    fetchData(url) {
      this.loading = true;
      this.api = null;
      fetch(`http://localhost:3000${url}`)
        .then(res => res.json())
        .then(json => {
          setTimeout(() => {
            this.api = json;
            this.loading = false;
          }, 900);
        });
    }
  }
};
