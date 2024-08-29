<template>
    <div class="px-20 text-center">
        <div class="border-2 border-red-400 bg-gray-100 py-16 px-24 q-mb-xl">
            <h2 class="text-h6">RELIABLE DIGITAL PROPERTY</h2>
            <h2 class="text-h4 text-bold">Features that <span class="text-secondary">Everyone</span> Needs</h2>
            <div class="border-2 border-blue-400 q-my-xl px-2">
                <div v-for="(reason, index) in reasons" :key="reason.id" class="border border-purple-400 my-4 rounded-lg row justify-between p-4 bg-white">
                    <div class="border border-red-400 w-[60px] h-[60px]"></div>
                    <div class="border border-red-400 w-[90%] text-left">
                        <p class="font-bold text-body1">{{ reason.topic }}</p>
                        <p>{{ index }}</p>
                        <p>{{ show(reason.explanation) }} <span @click="showMore()" class="text-red-400 cursor-pointer">{{ more ? '...show less' : '...show more' }}</span></p>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
import { ref } from 'vue';

const more = ref(false);

const show = (line) => {
    if(line.length > 15 && more.value === false){
        return line.slice(0, 210)
    }else {
        return line
    }
}

const showMore = () => {
     more.value = !more.value
}

const reasons = ref([
    {
        id: 1,
        topic: "All in one platform",
        icon: "sms",
        explanation: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit dolorum tenetur, ad a quidem expedita exercit ationem at odit consectetur ipsa magnam deserunt sequi dolorem cum non, neque, quo quisquam voluptate cumque? Numquam sequi ea repudiandae cum itaque mollitia corporis natus dolorem nobis id, nisi nemo error officiis aliquam voluptate animi, officia sed excepturi cumque vero dicta? Incidunt tempora, quis dolorem perspiciatis similique reprehenderit eos iste, deserunt hic labore, harum ipsam ducimus odio accusantium corrupti laudantium aliquid sapiente fuga placeat? Aliquam.! Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit dolorum tenetur, ad a quidem expedita exercitationem at odit consectetur ipsa magnam deserunt sequi dolorem cum non, neque, quo quisquam voluptate cumque? Numquam sequi ea repudiandae cum itaque mollitia corporis natus dolorem nobis id, nisi nemo error officiis aliquam voluptate animi, officia sed excepturi cumque vero dicta? Incidunt tempora, quis dolorem perspiciatis."
    },
    {
        id: 2,
        topic: "User-friendly interface",
        icon: "sms",
        explanation: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit dolorum tenetur, ad a quidem expedita exercit ationem at odit consectetur ipsa magnam deserunt sequi dolorem cum non, neque, quo quisquam voluptate cumque? Numquam sequi ea repudiandae cum itaque mollitia corporis natus dolorem nobis id, nisi nemo error officiis aliquam voluptate animi, officia sed excepturi cumque vero dicta? Incidunt tempora, quis dolorem perspiciatis similique reprehenderit eos iste, deserunt hic labore, harum ipsam ducimus odio accusantium corrupti laudantium aliquid sapiente fuga placeat? Aliquam.! Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit dolorum tenetur, ad a quidem expedita exercitationem at odit consectetur ipsa magnam deserunt sequi dolorem cum non, neque, quo quisquam voluptate cumque? Numquam sequi ea repudiandae cum itaque mollitia corporis natus dolorem nobis id, nisi nemo error officiis aliquam voluptate animi, officia sed excepturi cumque vero dicta? Incidunt tempora, quis dolorem perspiciatis."
    },
    {
        id: 3,
        topic: "Real time Collaboration",
        icon: "sms",
        explanation: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit dolorum tenetur, ad a quidem expedita exercit ationem at odit consectetur ipsa magnam deserunt sequi dolorem cum non, neque, quo quisquam voluptate cumque? Numquam sequi ea repudiandae cum itaque mollitia corporis natus dolorem nobis id, nisi nemo error officiis aliquam voluptate animi, officia sed excepturi cumque vero dicta? Incidunt tempora, quis dolorem perspiciatis similique reprehenderit eos iste, deserunt hic labore, harum ipsam ducimus odio accusantium corrupti laudantium aliquid sapiente fuga placeat? Aliquam.! Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit dolorum tenetur, ad a quidem expedita exercitationem at odit consectetur ipsa magnam deserunt sequi dolorem cum non, neque, quo quisquam voluptate cumque? Numquam sequi ea repudiandae cum itaque mollitia corporis natus dolorem nobis id, nisi nemo error officiis aliquam voluptate animi, officia sed excepturi cumque vero dicta? Incidunt tempora, quis dolorem perspiciatis."
    },
    {
        id: 4,
        topic: "Apply Complex Conditions",
        icon: "sms",
        explanation: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit dolorum tenetur, ad a quidem expedita exercit ationem at odit consectetur ipsa magnam deserunt sequi dolorem cum non, neque, quo quisquam voluptate cumque? Numquam sequi ea repudiandae cum itaque mollitia corporis natus dolorem nobis id, nisi nemo error officiis aliquam voluptate animi, officia sed excepturi cumque vero dicta? Incidunt tempora, quis dolorem perspiciatis similique reprehenderit eos iste, deserunt hic labore, harum ipsam ducimus odio accusantium corrupti laudantium aliquid sapiente fuga placeat? Aliquam.! Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit dolorum tenetur, ad a quidem expedita exercitationem at odit consectetur ipsa magnam deserunt sequi dolorem cum non, neque, quo quisquam voluptate cumque? Numquam sequi ea repudiandae cum itaque mollitia corporis natus dolorem nobis id, nisi nemo error officiis aliquam voluptate animi, officia sed excepturi cumque vero dicta? Incidunt tempora, quis dolorem perspiciatis."
    },
    {
        id: 5,
        topic: "Integrate Instantly",
        icon: "sms",
        explanation: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit dolorum tenetur, ad a quidem expedita exercit ationem at odit consectetur ipsa magnam deserunt sequi dolorem cum non, neque, quo quisquam voluptate cumque? Numquam sequi ea repudiandae cum itaque mollitia corporis natus dolorem nobis id, nisi nemo error officiis aliquam voluptate animi, officia sed excepturi cumque vero dicta? Incidunt tempora, quis dolorem perspiciatis similique reprehenderit eos iste, deserunt hic labore, harum ipsam ducimus odio accusantium corrupti laudantium aliquid sapiente fuga placeat? Aliquam.! Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit dolorum tenetur, ad a quidem expedita exercitationem at odit consectetur ipsa magnam deserunt sequi dolorem cum non, neque, quo quisquam voluptate cumque? Numquam sequi ea repudiandae cum itaque mollitia corporis natus dolorem nobis id, nisi nemo error officiis aliquam voluptate animi, officia sed excepturi cumque vero dicta? Incidunt tempora, quis dolorem perspiciatis."
    },
    {
        id: 6,
        topic: "NFT based Storage",
        icon: "sms",
        explanation: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit dolorum tenetur, ad a quidem expedita exercit ationem at odit consectetur ipsa magnam deserunt sequi dolorem cum non, neque, quo quisquam voluptate cumque? Numquam sequi ea repudiandae cum itaque mollitia corporis natus dolorem nobis id, nisi nemo error officiis aliquam voluptate animi, officia sed excepturi cumque vero dicta? Incidunt tempora, quis dolorem perspiciatis similique reprehenderit eos iste, deserunt hic labore, harum ipsam ducimus odio accusantium corrupti laudantium aliquid sapiente fuga placeat? Aliquam.! Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit dolorum tenetur, ad a quidem expedita exercitationem at odit consectetur ipsa magnam deserunt sequi dolorem cum non, neque, quo quisquam voluptate cumque? Numquam sequi ea repudiandae cum itaque mollitia corporis natus dolorem nobis id, nisi nemo error officiis aliquam voluptate animi, officia sed excepturi cumque vero dicta? Incidunt tempora, quis dolorem perspiciatis."
    }
])

</script>

<style>

</style>