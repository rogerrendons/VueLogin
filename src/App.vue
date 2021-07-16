<template>
  <div class="wrapper fadeInDown">
      <nav class="navbar shadow bg-white rounded justify-content-between flex-nowrap flex-row fixed-top">
        <div class="container">
          <img src="../src/assets/logo.jpg" alt="Logo Clase Alpha" width="180" height="60">
          <ul class="nav navbar-nav flex-row float-right">
            <li class="nav-item">
              <router-link class="nav-link pr-3" to="/">Ingrese</router-link>
            </li>
            <li class="nav-item">
              <router-link class="btn btn-outline-primary" to="/signup">Registro</router-link>
            </li>
          </ul>
       </div>
      </nav>
      <div class="container mt-5">
        <router-view></router-view>
      </div>
    </div>
</template>
