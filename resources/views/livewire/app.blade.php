<div>
    <livewire:header/>

    <div class="w-screen h-screen flex flex-col">
        <main class="mx-64 mt-20 p-8 flex-grow bg-white relative rounded-t-lg shadow-xl text-gray-800">
            <div class="text-xl font-semibold text-gray-700">
                Welcome {{ user()->name }}!
            </div>
            <section>
                {{-- {{ $slot }} --}}
            </section>
        </main>
    </div>
</div>
