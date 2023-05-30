<template>
  <div class="navbar_container">
    <div id="navbar">
    <nav>
      <RouterLink to="/aliquotasIcms" id="logo">
          <img src="../assets/images/logo.png" alt="" />
      </RouterLink>

      <div id="title">
        <p> Alíquotas do ICMS</p>
      </div>
    </nav>
  </div>
  </div>
</template>
<script>
export default {
  name: "Navbar",
};
</script>
<style scooped>
a{
  margin: 0;
  padding: 0;
}
.navbar_container{
  background-color: #fff;
}
#navbar {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0;
  margin: 0;
  margin: auto;
  max-width: 1200px;
}

nav {
  display:flex;
  
}

#logo {
  align-self: center;
}

#logo img {
  margin-left: 1rem;
  width: 115px;
  height: 2rem;
}

#navbar p {
  position: relative;
  margin-left: 24px;
  display: flex;
  justify-content: space-between;
  color: #383838;
  font-size: 19px !important;
  font-weight: 600 !important;
  padding-left: 1.5rem;
  border-left: 1px solid #525252;
}
</style>