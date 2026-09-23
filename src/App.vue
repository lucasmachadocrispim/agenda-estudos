<template>
  <div class="aplicacao">
    <nav class="menu">
      <RouterLink to="/">Início</RouterLink>
      <RouterLink to="/tarefas">Minhas tarefas</RouterLink>
    </nav>
    <RouterView />
  </div>
</template>

<style scoped>
.aplicacao {
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: 40px;
  font-family: sans-serif;
  background-color: #ffffff;
  color: #222;
}
.menu {
  display: flex;
  gap: 20px;
  margin-bottom: 40px;
}
.menu a {
  color: #6c63ff;
  text-decoration: none;
  font-size: 15px;
}
.menu a:hover {
  text-decoration: underline;
}
.menu a.router-link-exact-active {
  font-weight: bold;
}
</style>