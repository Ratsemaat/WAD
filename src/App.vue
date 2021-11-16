<template>
    <div id="app">
        <Header></Header>
        <router-view/>

        <Footer></Footer>
    </div>
</template>
<style>
    #app {
        display: flex;
        flex-direction: column;
        align-content: center;
        align-items: center;
        width: 100%;
        height: 100%;
        min-height: 100vh;
        margin: 0px;
        font-family: "PT Sans";
    }
</style>