<?php

namespace App\Http\Controllers;

use App\Models\Categories;
use App\Models\Orders;
use App\Models\Toy;
use Illuminate\Http\Request;

class OrdersController extends Controller
{
    public function index()
    {
        return Orders::all();
    }

    public function create(Request $request)
    {
        Orders::query()->create(
            [
                'toys_id' => "1",
                'email' => 'nnnn@gmail.com',
                'number' => '6',
                'status' => 'true',
                'description' => 'pet',
            ],
        );
    }

    public function update()
    {
        $order = Orders::query()->find(1);

        $order->update([
            'toys_id' => "1",
            'email' => 'asde@mail.ru',
            'number' => '1',
            'status' => 'true',
            'description' => 'pets',
        ]);
        dd('update');
    }

    public function delete()
    {
        $order = Orders::find(1);
        $order->delete();
    }

    public function restore()
    {
        $order = Orders::withTrashed()->find(1);
        $order->restore();
        dd('dfghj');
    }

    public function show($id)
    {
        return Orders::query()->findOrFail($id);
    }
}
