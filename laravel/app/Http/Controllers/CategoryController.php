<?php

namespace App\Http\Controllers;

use App\Models\Categories;
use App\Models\Toy;
use Illuminate\Http\Request;

class CategoryController extends Controller
{
    public function index()
    {
        return Categories::all();
    }

    public function create(Request $request)
    {
        $categoryArr = [
            [
                'name' => "cat",
                'category' => 'pet',
                'additional categories' => 'home',
            ],
            [
                'name' => "fox",
                'category' => 'pet',
                'additional categories' => 'forest',
            ],
            [
                'name' => "dog",
                'category' => 'pet',
                'additional categories' => 'home',
            ],
        ];

        Categories::query()->create(
            [
                'name' => "dog",
                'category' => 'pet',
                'additional categories' => 'home',
            ],
        );
    }

    public function update()
    {
        $category = Categories::query()->find(11);

        $category->update([
            'name' => 'asdfghj',
            'category' => 'pet',
            'additional categories' => 'home',
        ]);
        dd('update');
    }

    public function delete()
    {
        $category =Categories::find(11);
        $category->delete();
    }

    public function restore()
    {
        $category = Categories::withTrashed()->find(11);
        $category->restore();
        dd('dfghj');
    }

    public function show($id)
    {
        return Categories::query()->findOrFail($id);
    }
}
