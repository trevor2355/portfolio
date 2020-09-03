<template>
  <div id="home">
    <nav id="nav">
      <a>Home</a>
      <a>Projects</a>
      <a>Experience</a>
      <a>Travel Map</a>
      <a>Contact Me</a>
    </nav>
    <img
      id="backgroundImg"
      src="https://images.pexels.com/photos/417074/pexels-photo-417074.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"
    />
    <img id="profileImg" src="../assets/Trevor-Bell-Small-Portrait.jpg" />
    <div class="text">
      <h1>Trevor Bell</h1>
      <h2>Developer | Water-skier | Traveler | Engineer</h2>
    </div>
    <div class="line"></div>
  </div>
</template>
<style lang="scss" scoped>
@import "@/assets/colors.scss";

#home {
  min-height: 800px;
  height: 100vh;
}
#nav {
  position: fixed;
  top: 0;
  width: 100%;
  display: flex;
  justify-content: flex-end;
  height: 48px;
  background-color: white;
  color: $black;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.4);
  z-index: 1;
  a {
    font-size: 20px;
    padding-top: 12px;
    padding-bottom: 12px;
    padding-right: 4%;
  }
  a:hover {
    cursor: pointer;
    text-decoration: underline;
    color: $blue;
  }
}
#backgroundImg {
  position: relative;
  width: 100%;
  object-fit: cover;
  height: 440px;
}
#profileImg {
  position: absolute;
  top: 290px;
  left: 15%;
  width: 300px;
  height: 300px;
  border-radius: 500px;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.4);
  /* border: 3px rgb(32, 32, 32) solid; */
}
.text {
  position: absolute;
  top: 520px;
  left: 55%;
  color: $black;
  padding-right: 24px;
}
h1 {
  font-size: 72px;
  margin-bottom: 32px;
}
.line {
  position: absolute;
  top: 660px;
  left: 53%;
  width: 47%;
  height: 12px;
  background-color: $blue;
  border-bottom-left-radius: 8px;
  border-top-left-radius: 8px;
}
h2 {
  font-size: 24px;
}
.experience {
  height: 100vh;
  background-color: $veryLight;
}
</style>
