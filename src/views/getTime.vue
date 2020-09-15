<template>
    
</template>

<script>
    export default {
        name: "getTime",
        created () {

            const end = new Date();
            const start = new Date();
            start.setTime(start.getTime() - 3600 * 1000 * 24 * 7);
            var seperator1 = "-";
            var year1 = start.getFullYear();
            var month1 = start.getMonth() + 1;
            var strDate1 = start.getDate();
            if (month1 >= 1 && month1 <= 9) {
                month1 = "0" + month1;
            }
            if (strDate1 >= 0 && strDate1 <= 9) {
                strDate1 = "0" + strDate1;
            }
            var currentdate1 = year1 + seperator1 + month1 + seperator1 + strDate1;
            var year2 = end.getFullYear();
            var month2 = end.getMonth() + 1;
            var strDate2 = end.getDate();
            if (month2 >= 1 && month2 <= 9) {
                month2 = "0" + month2;
            }
            if (strDate2 >= 0 && strDate2 <= 9) {
                strDate2 = "0" + strDate2;
            }
            var currentdate2 = year2 + seperator1 + month2 + seperator1 + strDate2;
            console.log(currentdate1);
            console.log(currentdate2)
        },
    }


</script>

<style scoped>

</style>