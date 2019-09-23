<template>
  <div id="app">
    <div id="nav">
      <b-navbar toggleable="sm"
                type="dark"
                variant="secondary"
                fixed="top">
        <b-navbar-toggle target="nav-text-collapse"></b-navbar-toggle>

        <b-navbar-brand>Optimized4U</b-navbar-brand>

        <b-collapse id="nav-text-collapse"
                    is-nav>
          <b-navbar-nav class="ml-auto pr-4">
            <b-nav-item to="/">Home</b-nav-item>
            <b-nav-item to="/blog">Blog</b-nav-item>
          </b-navbar-nav>
        </b-collapse>
      </b-navbar>
    </div>

    <div class="container">
      <router-view />
    </div>

  </div>
</template>

<style>
#app {
  margin-top: 56px;
}
</style>
