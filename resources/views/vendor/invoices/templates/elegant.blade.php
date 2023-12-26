<main class="p-8 w-screen">
    <section class="w-screen max-w-7xl mx-auto space-y-4">
        <header class="flex justify-between">
            <div>
                <h1 class="text-3xl font-medium">Invoice</h1>
                <h3 class="text-gray-700">#347298374892347</h3>
            </div>
            <ul class="space-y-2">
                <li class="flex items-center">
                    <h4 class="text-gray-600 w-20">Issued on</h4>
                    :
                    <time class="text-gray-700 font-bold pl-4">{{ \Carbon\Carbon::parse($invoice->issued_on)->toFormattedDateString() }}</time>
                </li>
                <li class="flex items-center">
                    <h4 class="text-gray-600 w-20">Due on</h4>
                    :
                    <time class="text-gray-700 font-bold pl-4">{{ \Carbon\Carbon::parse($invoice->due_on)->toFormattedDateString() }}</time>
                </li>
            </ul>
        </header>

        <div class="w-full h-px bg-indigo-500"></div>

        <section class="grid grid-cols-2">
            <div>
                <h4 class="font-medium pb-2">Billed To</h4>
                <address class="">
                    <p class="font-bold text-2xl mb-1">{{ $invoice->client->name }}</p>
                    @php
                        $buyerAddress = $invoice->client->address;
                        $buyerAddress = explode("\n", $buyerAddress);
                    @endphp
                    @foreach ($buyerAddress as $address)
                        <p class="text-sm text-gray-700">{{ $address }}</p>
                    @endforeach
                </address>
            </div>
            <div>
                <h4 class="font-medium pb-2">From</h4>
                <address class="">
                    <p class="font-bold text-2xl mb-1">{{ $invoice->user->name }}</p>
                    @php
                        $buyerAddress = $invoice->user->address;
                        $buyerAddress = explode("\n", $buyerAddress);
                    @endphp
                    @foreach ($buyerAddress as $address)
                        <p class="text-sm text-gray-700">{{ $address }}</p>
                    @endforeach
                </address>
            </div>
        </section>

        <section class="pb-4">
            <h4 class="font-medium">Notes</h4>

            <div class="w-full my-2 h-px bg-indigo-500"></div>

            <p class="text-gray-700 text-lg">{{ $invoice->summary }}</p>
        </section>

        {{ $this->table }}
    </section>

</main>
