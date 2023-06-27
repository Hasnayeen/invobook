<!DOCTYPE html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">

<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <meta name="csrf-token" content="{{ csrf_token() }}">

    <title>{{ config('app.name', 'Laravel') }}</title>

    <!-- Fonts -->
    <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Nunito:wght@400;600;700&display=swap">

    <!-- Scripts -->
    @vite(['resources/css/app.css', 'resources/js/app.js'])
</head>

<body>
    <div class="font-sans text-gray-900 antialiased">
        <div class="px-4 pb-8 w-full">
            <!-- nav bar -->
            <section class="flex items-center justify-between mb-8 w-full">
                <div>
                    <div class="space-x-0 text-xl font-semibold">
                        <span class="text-gray-600 -mr-3">#</span>
                        <span class="text-gray-800 uppercase pl-2">{{ \Str::limit($invoice->getSerialNumber(), 12, '') }}</span>
                    </div>
                    <div class="pt-4">
                        <div>
                            <div class="text-xs text-gray-600">Issued on</div>
                            <h3 class="text-lg font-bold">{{ $invoice->getDate() }}</h3>
                        </div>
                        <div>
                            <div class="text-xs text-gray-600">Due on</div>
                            <h3 class="text-lg font-bold">{{ $invoice->getPayUntilDate() }}</h3>
                        </div>
                    </div>
                </div>
                <div class="flex">
                    {{-- <div>
                        <h1 class="text-2xl font-semibold mb-1">Nehal Hasnayeen</h1>
                        <h2 class="text-lg">searching.nehal@gmail.com</h2>
                    </div> --}}
                    <div class="bg-gray-100 p-4 rounded-lg">
                        <p class="text-sm font-semibold">Invoice for</p>
                        <h1 class="font-bold text-2xl mb-1">Smart Send ApS</h1>
                        <h2 class="text-sm">DK32342892</h2>
                        <h3 class="text-sm">Vestergade 16</h3>
                        <h4 class="text-sm">DK-1456 Copenhagen</h4>
                    </div>
                </div>
            </section>

            <!-- summary -->
            <section class="mb-8">
                <h1 class="text-xl font-semibold text-gray-600 mb-2">Summary</h1>
                <div class="border-gray-200 border-b-2 w-full mb-2"></div>
                <h1 class="text-xl text-gray-800">
                    @if ($invoice->notes)
                        {{ $invoice->notes }}
                    @else
                        Invoice for [ {{ $invoice->getCustomData()['from'] }} - {{ $invoice->getCustomData()['to'] }} ]
                    @endif
                </h1>
            </section>
            <!-- table -->
            <section class="mb-8 rounded-lg overflow-hidden border-2 border-gray-100">
                <table class="border w-full rounded-xl">
                    <tr class="bg-coolGray-50 border-b text-gray-700">
                        <th class="uppercase  text-left pl-8 py-3 pr-48">item</th>
                        <th class="uppercase  text-left pr-10">project</th>
                        <th class="uppercase  text-left pr-10">hrs</th>
                        <th class="uppercase  text-left pr-10 ">rate</th>
                        <th class="uppercase  text-left  ">subtotal</th>
                    </tr>
                    @foreach ($invoice->items as $item)
                        <tr class="{{ $loop->even ? 'bg-blueGray-50' : '' }} text-xs">
                            <td class=" text-left pl-8 py-3 pr-20">{{ $item->title }}</td>
                            <td class="">@isset($item->project)
                                {{ $item->project }}
                            @endisset</td>
                            <td class="">{{ $item->hours }}</td>
                            <td class="">{{ $invoice->formatCurrency($item->price_per_unit) }}</td>
                            <td class="">{{ $invoice->formatCurrency($item->sub_total_price) }}</td>
                        </tr>
                    @endforeach
                </table>
            </section>

            <div class="flex justify-end">
                <section class="border-2 border-gray-100 rounded-lg w-1/2">
                    <table class="w-full">
                        <tr class="border-b-2 border-gray-100">
                            <td class="pl-8 py-3 text-xl font-semibold text-gray-600 pr-24">Subtotal</td>
                            <td class="text-xl font-bold text-gray-800">{{ $invoice->formatCurrency($invoice->total_amount - $invoice->total_taxes) }}</td>
                        </tr>
                        <tr class="border-b">
                            <td class="pl-8 py-3 text-xl font-semibold text-gray-600 pr-24">VAT</td>
                            <td class="text-xl font-bold text-gray-800">{{ $invoice->formatCurrency($invoice->total_taxes) }}</td>
                        </tr>
                        <tr class="border-b">
                            <td class="pl-8 py-3 text-xl font-semibold text-gray-600 pr-24">Total</td>
                            <td class="text-xl font-bold text-gray-800">{{ $invoice->formatCurrency($invoice->total_amount) }}</td>
                        </tr>
                    </table>
                </section>
            </div>
        </div>
    </div>
</body>

</html>
