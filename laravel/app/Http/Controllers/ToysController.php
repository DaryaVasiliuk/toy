<?php

namespace App\Http\Controllers;

use App\Models\Categories;
use App\Models\Toy;
use Illuminate\Http\Request;

class ToysController extends Controller
{
    public function index()
    {
        $toys = Toy::all();
        return view('toys', compact('toys'));
    }

    public function create(Request $request)
        {
            dd($request->get('test'));
            $toysArr = [
                [
                    'categories_id' => 1,
                    'size' => '38',
                    'color' => 'red',
                    'price' => '30',
                    'count' => '2',
                    'description' => 'dog',
                ],
                [
                    'categories_id' => 1,
                    'size' => '75',
                    'color' => 'red',
                    'price' => '34',
                    'count' => '24',
                    'description' => 'dog',
                ],
            ];

//            foreach ($toysArr as $item) {
                Toy::query()->create(
                    [
                    'categories_id' => 1,
                    'size' => '65',
                        'color' => 'red',
                    'price' => '4',
                    'count' => '92',
                    'description' => 'dog',
                    ]
                );
//            }

        }

    public function update()
    {
        $toy = Toy::query()->find(1);

        $toy->update([
            'size' => '1',
            'price' => '5',
            'count' => '6',
            'description' => 'catt',
        ]);
        dd('update');
    }

    public function delete()
    {
        $toy =Toy::find(2);
        $toy->delete();
    }

    public function restore()
    {
        $toy = Toy::withTrashed()->find(2);
        $toy->restore();
        dd('dfghj');
    }

    public function show($id)
    {
        return Toy::query()->findOrFail($id);
    }

}
