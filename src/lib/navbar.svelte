<script>
    import logo from './images/logo.png'
    import Fa from 'svelte-fa/src/fa.svelte'
    import { faBars } from '@fortawesome/free-solid-svg-icons'
    import {
        Menu,
        MenuButton,
        MenuItems,
        MenuItem,
    } from "@rgossiaux/svelte-headlessui";
    import ClassNames from "./functions/ClassNames";
</script>

<nav class="w-full bg-secondary py-8 px-8 sm:px-12 xl:px-24 flex flex-row items-center">
    <a href="/" class="flex flex-row items-center gap-2 lg:gap-5">
        <img src={logo} alt="Logo" class="w-20 sm:w-28" />
        <h1 class="text-center text-lg sm:text-3xl text-tertiary font-oswald">ALEXANDER<br />THE BET</h1>
    </a>

    <div class="ml-auto hidden lg:flex gap-4 2xl:gap-10 text-xl font-sans items-center"> 
        <a href="/freebets" class="text-white hover:text-tertiary transition-colors duration-300">Free Bets</a>
        <a href="/funbets" class="text-white hover:text-tertiary transition-colors duration-300">Fun Bets</a>
        <a href="/coupons" class="text-white hover:text-tertiary transition-colors duration-300">Δελτία</a>
        <a href="/statistics" class="text-white hover:text-tertiary transition-colors duration-300">Στατιστική</a>
        <a href="/gallery" class="text-white hover:text-tertiary transition-colors duration-300">Gallery</a>
        <a href="/faq" class="text-white hover:text-tertiary transition-colors duration-300">FAQ</a>
        <a href="mailto:betalexander777@gmail.com" target="_blank" class="text-white hover:text-tertiary transition-colors duration-300">Επικοινωνία</a>
    </div>
    
    <div class="ml-auto">
        <Menu>
            <MenuButton class="flex lg:hidden">
                <Fa class="text-xl sm:text-4xl" icon={faBars}/>
            </MenuButton>

            <MenuItems  class="divide-y-2 divide-secondary top-0 right-0 h-screen w-44 bg-gray-100 bg-opacity-90 shadow-2xl transition-all absolute z-50 flex flex-col opacity-100 lg:hidden">
                <MenuItem let:active class="p-2 mt-5">
                    <a href="/freebets" class="block text-center text-xl font-semibold opacity-95">Free Bets</a>
                </MenuItem>
                <MenuItem let:active class="p-2">
                    <a href="/funbets" class="block text-center text-xl font-semibold opacity-95">Fun Bets</a>
                </MenuItem>
                <MenuItem let:active class="p-2">
                    <a href="/coupons" class="block text-center text-xl font-semibold opacity-95">Δελτία</a>
                </MenuItem>
                <MenuItem let:active class="p-2">
                    <a href="/statistics" class="block text-center text-xl font-semibold opacity-95">Στατιστική</a>
                </MenuItem>
                <MenuItem let:active class="p-2">
                    <a href="/gallery" class="block text-center text-xl font-semibold opacity-95">Gallery</a>
                </MenuItem>
                <MenuItem let:active class="p-2">
                    <a href="/faq" class="block text-center text-xl font-semibold opacity-95">FAQ</a>
                </MenuItem>
                <MenuItem let:active class="p-2">
                    <a href=mailto:betalexander777@gmail.com target="_blank" class="block text-center text-xl font-semibold opacity-95">Επικοινωνία</a>
                </MenuItem>
            </MenuItems>
        </Menu>
    </div>
      
</nav>