<script setup>
import { ref } from "vue";

const novaTarefa = ref("");
const tarefas = ref([]);

function adicionar() {
  if (novaTarefa.value.trim() !== "") {
    tarefas.value.push({
      id: tarefas.value.length + 1,
      titulo: novaTarefa.value.trim(),
    });
    novaTarefa.value = "";
  }
}
</script>

<template>
  <main class="pagina">
    <h1>Minhas tarefas</h1>
    <div class="entrada">
      <input
        v-model="novaTarefa"
        @keyup.enter="adicionar"
        placeholder="Digite uma tarefa..."
      />
      <button @click="adicionar">Adicionar</button>
    </div>
    <p v-if="tarefas.length === 0" class="vazio">Nenhuma tarefa cadastrada.</p>
    <ul v-else class="lista">
      <li v-for="tarefa in tarefas" :key="tarefa.id">
        {{ tarefa.titulo }}
      </li>
    </ul>
    <RouterLink class="voltar" to="/">Voltar para o início</RouterLink>
  </main>
</template>

<style scoped>
.pagina {
  width: min(500px, 90%);
  text-align: center;
}
h1 {
  font-size: 28px;
  color: #1a2b4a;
  margin-bottom: 25px;
}
.entrada {
  display: flex;
  gap: 10px;
  margin-bottom: 20px;
}
input {
  flex: 1;
  padding: 10px;
  font-size: 15px;
  border: 1px solid #ccc;
  border-radius: 6px;
  outline: none;
}
input:focus {
  border-color: #6c63ff;
}
button {
  padding: 10px 18px;
  font-size: 15px;
  font-weight: bold;
  color: #fff;
  background-color: #6c63ff;
  border: none;
  border-radius: 6px;
  cursor: pointer;
}
button:hover {
  background-color: #574fd6;
}
.vazio {
  color: #888;
  font-size: 14px;
  margin: 20px 0;
}
.lista {
  list-style: none;
  padding: 0;
  text-align: left;
}
.lista li {
  padding: 10px 12px;
  margin-bottom: 8px;
  background-color: #f4f4f8;
  border-radius: 6px;
  font-size: 15px;
  color: #333;
}
.voltar {
  display: inline-block;
  margin-top: 25px;
  color: #6c63ff;
  text-decoration: none;
  font-size: 14px;
}
.voltar:hover {
  text-decoration: underline;
}
</style>