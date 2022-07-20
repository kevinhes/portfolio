<template>
  <nav class="navbar navbar-expand-lg bg-light shadow">
    <div class="container">
      <div>
        <RouterLink class="navbar-brand" to="/">
          <h1 class="fs-5">姜宥先</h1>
        </RouterLink>
        <p class="fs-8">前端工程師</p>
      </div>
      <div class="navbar-collapse">
        <ul class="navbar-nav ms-auto mb-2 mb-lg-0">
          <li class="nav-item">
            <RouterLink class="nav-link" aria-current="page" to="/about">關於我</RouterLink>
          </li>
          <li class="nav-item">
            <RouterLink class="nav-link" to="/portfolio">作品集</RouterLink>
          </li>
        </ul>
      </div>
      <div class="navbar-collapse">
        <ul class="navbar-nav ms-auto mb-2 mb-lg-0">
          <li class="nav-item">
            <a href="#" class="nav-link">
              <i class="bi bi-github fs-2 lh-1"></i>
            </a>
          </li>
          <li class="nav-item">
            <a href="#" class="nav-link">
              <i class="bi bi-file-person-fill fs-2 lh-1"></i>
            </a>
          </li>
          <li class="nav-item">
            <a href="#" class="nav-link">
              <svg xmlns="http://www.w3.org/2000/svg" width="28" height="29" fill="currentColor" class="bi bi-rss-fill" viewBox="0 0 16 16">
                <path d="M2 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V2a2 2 0 0
                0-2-2H2zm1.5 2.5c5.523 0 10 4.477 10 10a1 1 0 1 1-2 0 8 8 0 0 0-8-8 1 1
                0 0 1 0-2zm0 4a6 6 0 0 1 6 6 1 1 0 1 1-2 0 4 4 0 0 0-4-4 1 1 0 0 1 0-2zm.5
                7a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3z"/>
              </svg>
            </a>
          </li>
        </ul>
      </div>
    </div>
  </nav>
  <RouterView class="ms-88"/>
</template>

<style lang="scss">
@import '../assets/style/all.scss'
</style>
