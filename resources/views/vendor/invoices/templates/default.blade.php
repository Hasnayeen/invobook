@php
    use Illuminate\Support\Facades\Vite;
@endphp

<!DOCTYPE html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">

<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <meta name="csrf-token" content="{{ csrf_token() }}">

    <title>{{ config('app.name', 'Laravel') }}</title>

    <!-- Fonts -->
    <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Nunito:wght@400;600;700&display=swap">

    <!-- Styles -->
    <style>
        {!! Vite::content('resources/css/app.css') !!}
    </style>
    <script>
        {!! Vite::content('resources/js/app.js') !!}
    </script>
</head>

<body class="w-[21cm] h-[29.7cm]">
    <div class="font-sans text-gray-900 antialiased px-8 pt-8">
        <div class="px-4 pb-8 w-full">
            <!-- nav bar -->
            <section class="mb-8 w-full flex justify-between items-center">
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
                    <div class="bg-gray-100 p-4 rounded-lg">
                        <p class="text-sm font-semibold text-gray-600">Invoice for</p>
                        <h1 class="font-bold text-2xl mb-1">{{ $invoice->buyer->name }}</h1>
                        @php
                            $buyerAddress = $invoice->buyer->address;
                            $buyerAddress = explode("\n", $buyerAddress);
                        @endphp
                        @foreach ($buyerAddress as $address)
                            <p class="text-sm">{{ $address }}</p>
                        @endforeach
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
            @php
                $showProject = $invoice->items->every(fn ($value) => ! empty($value->project));
            @endphp
            <section class="mb-8 rounded-lg overflow-hidden border-2 border-gray-100">
                <table class="border w-full rounded-xl">
                    <tr class="border-b text-gray-700">
                        <th class="uppercase  text-left px-8 py-3">item</th>
                        @if ($showProject)
                            <th class="uppercase  text-left pr-8">project</th>
                        @endif
                        <th class="uppercase  text-left pr-8">hrs</th>
                        <th class="uppercase  text-left pr-8 ">rate</th>
                        <th class="uppercase  text-left  ">subtotal</th>
                    </tr>
                    @foreach ($invoice->items as $item)
                        <tr class="{{ $loop->even ? 'bg-blueGray-50' : '' }} text-xs">
                            <td class=" text-left pl-8 py-3 pr-20">{{ $item->title }}</td>
                            @if ($showProject)
                                <td class="">
                                    {{ $item->project }}
                                </td>
                            @endif
                            <td class="">{{ $item->hours }}</td>
                            <td class="">{{ $invoice->formatCurrency($item->price_per_unit) }}</td>
                            <td class="">{{ $invoice->formatCurrency($item->sub_total_price) }}</td>
                        </tr>
                    @endforeach
                </table>
            </section>

            <div class="grid grid-cols-4">
                <section class="border-2 border-gray-100 rounded-lg col-span-2 col-start-3">
                    <div class="w-full">
                        <div class="grid grid-cols-5 items-center border-b">
                            <span class="col-span-2 py-3 text-right text-lg font-semibold text-gray-500">SUBTOTAL</span>
                            <span class="col-span-2 col-start-4 text-left text-xl font-bold text-gray-800">{{ $invoice->formatCurrency($invoice->total_amount - $invoice->total_taxes) }}</span>
                        </div>
                        <div class="grid grid-cols-5 items-center border-b">
                            <span class="col-span-2 py-3 text-right text-lg font-semibold text-gray-500">VAT</span>
                            <span class="col-span-2 col-start-4 text-left text-xl font-bold text-gray-800">{{ $invoice->formatCurrency($invoice->total_taxes) }}</span>
                        </div>
                        <div class="grid grid-cols-5 items-center border-b">
                            <span class="col-span-2 py-3 text-right text-lg font-semibold text-gray-500">TOTAL</span>
                            <span class="col-span-2 col-start-4 text-left text-xl font-bold text-gray-800">{{ $invoice->formatCurrency($invoice->total_amount) }}</span>
                        </div>
                    </div>
                </section>
            </div>
        </div>
    </div>
</body>

</html>
