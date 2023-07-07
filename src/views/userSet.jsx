import styled from 'styled-components-vue'
const Wrap = styled.div`
position: relative;
:after{
    width: 140%;
    height: 60vw;
    left: -20%;
    top: 0;
    z-index: 0;
    content: '';
    position: absolute;
    background-color: #baaa8c;
    border-radius: 0 0 45% 45%;
}
width: 100%;
height: 60vw;
display: flex;
justify-content: center;
align-items: flex-start;
padding:4vw;
`
export default {
    render() {
        return <div class=" w-screen relative overflow-hidden bg-[#f5f5f5]">
            <header class="w-screen p-[4vw] fixed top-0 z-[10]">
                <div class="flex justify-between items-center ">
                    <Icon icon="ph:arrow-left-light" color="white" class="w-[5vw] h-[5vw]" />
                    <Icon icon="ri:more-2-fill" color="#fff" class="w-[5vw] h-[5vw] " />
                </div>
            </header>
            <Wrap class="bg-[#baaa8c] h-[50vw] flex justify-center items-start p-[4vw] relative ">
                <div class="flex justify-between items-center  w-[18vw] z-[1]">
                    <span class="text-[1.5vw]   w-[10vw] h-[4vw]  rounded-[3vw] flex justify-center items-center bg-[#fff]">照片墙</span>
                    <span class="rounded-[50%] w-[3vw] h-[3vw] bg-[#ddd9d0]"></span>
                    <span class="rounded-[50%] w-[2vw] h-[2vw] bg-[#ddd9d0]"></span>
                </div>
                <div class="absolute bottom-[10vw] right-[4vw] w-[20vw] z-[1] h-[7vw] rounded-[4vw] flex items-center justify-center  border-[.55vw] border-[#ffffff66] border-solid bg-[#22222280]">
                    <span class="text-[2vw] text-[#fff]">他的照片</span>
                </div>
            </Wrap>

        </div>
    },
    data() {
        return {
            msg: 'hello,jsx'
        }
    }
}
