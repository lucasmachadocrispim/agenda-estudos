<script setup>
</script>

<template>
  <main class="pagina">
    <h1>Agenda de Estudos</h1>
    <p class="saudacao">Olá, Lucas Crispim!</p>
    <p class="descricao">
      Esta aplicação simples ajuda a organizar tarefas de estudo.
    </p>
    <RouterLink class="link" to="/tarefas">Ver minhas tarefas</RouterLink>
  </main>
</template>

<style scoped>
.pagina {
  width: min(500px, 90%);
  text-align: center;
}
h1 {
  font-size: 32px;
  font-weight: bold;
  color: #1a2b4a;
  margin-bottom: 30px;
  line-height: 1.2;
}
.saudacao {
  font-size: 18px;
  font-weight: bold;
  color: #333;
  margin-bottom: 15px;
}
.descricao {
  font-size: 15px;
  color: #555;
  margin-bottom: 25px;
}
.link {
  color: #6c63ff;
  text-decoration: none;
  font-weight: bold;
  font-size: 15px;
}
.link:hover {
  text-decoration: underline;
}
</style>