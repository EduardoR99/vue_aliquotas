<template>
    <div class="container_state">
        <div class="banner_image">

        </div>
        <div class="table_container">
            <div class="state_title">
                <div class="state_left">
                    <div class="state_img">
                        <img :src="estadoAtual.img" :key="estadoAtual.id" alt="">
                    </div>
                    <div class="title">
                        {{ estadoAtual.nome }}
                    </div>
                </div>
                <div class="state_right">
                    <div>
                        <router-link to="/aliquotasIcms">
                            <button class="back_button">Voltar</button>
                        </router-link>
                    </div>
                </div>
            </div>
            <div class="table_state">
                <table>
                    <thead>
                        <tr>
                            <th class="table_head" scope="col">Alíquotas Internas ICMS</th>
                            <th scope="col">Descrição</th>
                            <th scope="col">FUNDAMENTAÇÃO LEGAL</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr class="table_body" v-for="item in tabela" :key="item.$id">
                            <td class="">{{ item.aliquota }}</td>
                            <td v-html="item.descricao"></td>
                            <td>{{ item.baseLegal }}</td>
                        </tr>
                    </tbody>
                </table>

            </div>
            <div class="notas">
                <div class="n1">
                    <span style="color:#707070;font-weight:bold;">Notas</span>
                    <span @click="exibir()" style="cursor:pointer;color: #707070;font-weight: 600;">
                        <span v-show="!n2Active">Mostra + </span>
                        <span v-show="n2Active">Ocultar - </span>
                    </span>
                </div>
                <div :class="{ n2: true, n2Active: n2Active }">
                    <div v-if="!isNota"
                        style="color: #cccc;    font-size: 18px;    width: 100%;    display: flex;    justify-content: center;    align-items: center;">
                        Nenhuma Nota
                    </div>
                    <div v-else>
                        <div v-show="notas.length == 0"
                            style="color: #cccc;    font-size: 18px;    width: 100%;    display: flex;    justify-content: center;    align-items: center;">
                            Nenhuma Nota
                        </div>
                        <div v-for="(n, k) in notas" :key="k" v-html="n.nota" style="margin-bottom:20px;display: block;">
                        </div>
                    </div>
                </div>
            </div>
        </div>

    </div>
</template>
<script>
import calc from '../services/calc';

export default {

    data() {
        return {
            tabela: [],
            notas: [],
            isTabela: false,
            isNota: false,
            n2Active: false,
            estadoAtual: '',
            uf: '',
            estados: {
                AC: {
                    id: 1,
                    nome: 'Acre',
                    img: '/src/assets/images/states/BR-AC.svg'
                },
                AL: {
                    id: 2,
                    nome: 'Alagoas',
                    img: '/src/assets/images/states/BR-AL.svg'
                },
                AM: {
                    id: 4,
                    nome: 'Amazonas',
                    img: '/src/assets/images/states/BR-AM.svg'
                },
                AP: {
                    id: 3,
                    nome: 'Amapá',
                    img: '/src/assets/images/states/BR-AP.svg'
                },
                BA: {
                    id: 5,
                    nome: 'Bahia',
                    img: '/src/assets/images/states/BR-BA.svg'
                },
                CE: {
                    id: 6,
                    nome: 'Ceará',
                    img: '/src/assets/images/states/BR-CE.svg'
                },
                DF: {
                    id: 7,
                    nome: 'Distrito Federal',
                    img: '/src/assets/images/states/BR-DF.svg'
                },
                ES: {
                    id: 8,
                    nome: 'Espírito Santo',
                    img: '/src/assets/images/states/BR-ES.svg'
                },
                GO: {
                    id: 9,
                    nome: 'Goiás',
                    img: '/src/assets/images/states/BR-GO.svg'
                },
                MA: {
                    id: 10,
                    nome: 'Maranhão',
                    img: '/src/assets/images/states/BR-MA.svg'
                },
                MG: {
                    id: 13,
                    nome: 'Minas Gerais',
                    img: '/src/assets/images/states/BR-MG.svg'
                },
                MS: {
                    id: 12,
                    nome: 'Mato Grosso do Sul',
                    img: '/src/assets/images/states/BR-MS.svg'
                },
                MT: {
                    id: 11,
                    nome: 'Mato Grosso',
                    img: '/src/assets/images/states/BR-MT.svg'
                },
                PA: {
                    id: 14,
                    nome: 'Pará',
                    img: '/src/assets/images/states/BR-PA.svg'
                },
                PB: {
                    id: 15,
                    nome: 'Paraíba',
                    img: '/src/assets/images/states/BR-PB.svg'
                },
                PR: {
                    id: 16,
                    nome: 'Paraná',
                    img: '/src/assets/images/states/BR-PR.svg'
                },
                PE: {
                    id: 17,
                    nome: 'Pernambuco',
                    img: '/src/assets/images/states/BR-PE.svg'
                },
                PI: {
                    id: 18,
                    nome: 'Piauí',
                    img: '/src/assets/images/states/BR-PI.svg'
                },
                RJ: {
                    id: 19,
                    nome: 'Rio de Janeiro',
                    img: '/src/assets/images/states/BR-RJ.svg'
                },
                RN: {
                    id: 20,
                    nome: 'Rio Grande do Norte',
                    img: '/src/assets/images/states/BR-RN.svg'
                },
                RO: {
                    id: 22,
                    nome: 'Rondônia',
                    img: '/src/assets/images/states/BR-RO.svg'
                },
                RR: {
                    id: 24,
                    nome: 'Roraima',
                    img: '/src/assets/images/states/BR-RR.svg'
                },
                RS: {
                    id: 21,
                    nome: 'Rio Grande do Sul',
                    img: '/src/assets/images/states/BR-RS.svg'
                },
                SC: {
                    id: 25,
                    nome: 'Santa Catarina',
                    img: '/src/assets/images/states/BR-SC.svg'
                },
                SE: {
                    id: 27,
                    nome: 'Sergipe',
                    img: '/src/assets/images/states/BR-SE.svg'
                },
                SP: {
                    id: 26,
                    nome: 'São Paulo',
                    img: '/src/assets/images/states/BR-RS.svg'
                },
                TO: {
                    id: 28,
                    nome: 'Tocantins',
                    img: '/src/assets/images/states/BR-TO.svg'
                }
            }
        }
    },
    methods: {
        exibir() {
            this.n2Active = !this.n2Active
        },
        qualEstado(params) {
            this.estadoAtual = this.estados[params]
        },
        async todasAliquotas() {
            let status = await calc.TodasAliquotas(this.estadoAtual.id)
            if (status.status <= 205) {
                this.tabela = status.data
                this.isTabela = true;
                console.log(this.tabela)
            } else {
                this.isTabela = false
            }

        },
        async todasNotas() {
            let status = await calc.TodasNotas(this.estadoAtual.id)
            if (status.status <= 205) {
                this.notas = status.data
                this.isNota = true
            } else {
                this.isNota = false
            }
            console.log(status)
        }
    },
    mounted() {
        this.qualEstado(this.$route.params.nome);
        this.todasAliquotas();
        this.todasNotas()
    },
    created(){
       document.documentElement.scrollTop = 0;    
    },
    name: "State",

}
</script>
<style scoped>
.container_state {
    margin-top: 2rem;
}

.banner_image {
    background-image: url(../assets/images/16056.jpg);
    background-color: #007900;
    background-blend-mode: multiply;
    position: relative;
    height: 16vh;
}

.state_title {
    display: flex;
    justify-content: space-between;
    margin-top: 4rem;
    border-bottom: 1px solid #cfcfcf;
    padding-bottom: .5rem;
}

.state_left {
    display: flex;
    align-items: center;
}

.state_left .title {
    font-size: 30px;
    color: rgb(56, 56, 56);
    font-weight: 600;
}

.back_button {
    font-weight: bold;
    width: 150px;
    height: 35px;
    background: rgb(255, 255, 255);
    border-radius: 5px;
    cursor: pointer;
    border: 2px solid rgb(0, 145, 136);
    transition: .3s ease;
}

.back_button:hover {
    color: #fff;
    background-color: rgb(0, 145, 136);
}

.state_img img {
    width: 65px;
    height: 50px;
}

.table_container {
    padding-left: 4rem;
    padding-right: 4rem;
    padding-bottom: 5rem;
}

thead {
    background-color: #009188;
    color: #fff;
    font-size: 19px;
    padding-top: 2rem;
}

td {
    padding: 1rem;
}

.table_state {
    margin-top: 4rem;
    margin-bottom: 5rem;
}

.table_head {
    padding-top: 1rem;
    padding-bottom: 1rem;
}

.table_body:nth-child(odd) {
    background-color: #dee2e6;
}

.table_body:hover {
    background-color: #cfcfcf;
}
.notas{
  padding:20px;
  border: 1px solid #707070;
  margin:30px 0px;
  
}
.notas .n1{
  display:flex;
  justify-content: space-between;
  height:30px;
  margin-bottom:20px;
}
.notas .n2{ 
  opacity: 0;
  transform: scaleY(0);
   transform-origin: top;
  transition: transform 0.5s ease;
}
.notas .n2Active{ 
  opacity: 1; 
  transform: scaleY(1);
  transition: transform 0.5s ease;
}
.notas .n2 div{ 
  display:none;
}
.notas .n2 .p{ 
  display:none;
}
.notas .n2Active div{
  display:initial; 
}
.notas .n2Active .p{
  display:initial; 
}
</style>