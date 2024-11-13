<?php

namespace App\Http\Controllers;

use App\Models\Course;
use Illuminate\Http\Request;
use Illuminate\Database\Eloquent\ModelNotFoundException;

class CourseController extends Controller
{
    // Create a new course
    public function postCreate(Request $request)
    {
        try {
            $request->validate([
                'title' => 'required|string|max:255',
                'description' => 'required|string',
                'image_path' => 'nullable|string',
                'teacher_id' => 'required|string',
                'parent_id' => 'nullable|string',
            ]);

            $course = Course::create($request->all());

            return response()->json([
                'message' => 'COURSE_CREATED_SUCCESSFULLY',
                'data' => $course
            ], 201);
        } catch (\Illuminate\Validation\ValidationException $e) {
            return response()->json([
                'message' => 'VALIDATION_FAILED',
                'errors' => $e->errors(),
            ], 422);
        } catch (\Exception $e) {
            return response()->json([
                'message' => 'COURSE_CREATION_FAILED',
                'error' => $e->getMessage(),
            ], 500);
        }
    }

    // Update a course
    public function postUpdate(Request $request, $id)
    {
        try {
            $course = Course::findOrFail($id);

            $request->validate([
                'title' => 'sometimes|required|string|max:255',
                'description' => 'sometimes|required|string',
                'image_path' => 'nullable|string',
                'teacher_id' => 'sometimes|required|string',
                'parent_id' => 'nullable|string',
            ]);

            $course->update($request->all());

            return response()->json([
                'message' => 'COURSE_UPDATED_SUCCESSFULLY',
                'data' => $course
            ], 200);
        } catch (ModelNotFoundException $e) {
            return response()->json([
                'message' => 'COURSE_NOT_FOUND',
            ], 404);
        } catch (\Illuminate\Validation\ValidationException $e) {
            return response()->json([
                'message' => 'VALIDATION_FAILED',
                'errors' => $e->errors(),
            ], 422);
        } catch (\Exception $e) {
            return response()->json([
                'message' => 'COURSE_UPDATE_FAILED',
                'error' => $e->getMessage(),
            ], 500);
        }
    }

    // List all courses
    public function list()
    {
        try {
            $courses = Course::all();

            return response()->json([
                'message' => 'COURSES_RETRIEVED_SUCCESSFULLY',
                'data' => $courses
            ], 200);
        } catch (\Exception $e) {
            return response()->json([
                'message' => 'COURSES_RETRIEVAL_FAILED',
                'error' => $e->getMessage(),
            ], 500);
        }
    }

    // Get course details
    public function detail($id)
    {
        try {
            $course = Course::findOrFail($id);

            return response()->json([
                'message' => 'COURSE_RETRIEVED_SUCCESSFULLY',
                'data' => $course
            ], 200);
        } catch (ModelNotFoundException $e) {
            return response()->json([
                'message' => 'COURSE_NOT_FOUND',
            ], 404);
        } catch (\Exception $e) {
            return response()->json([
                'message' => 'COURSE_RETRIEVAL_FAILED',
                'error' => $e->getMessage(),
            ], 500);
        }
    }

    // Delete a course
    public function delete($id)
    {
        try {
            $course = Course::findOrFail($id);

            $course->delete();

            return response()->json([
                'message' => 'COURSE_DELETED_SUCCESSFULLY'
            ], 200);
        } catch (ModelNotFoundException $e) {
            return response()->json([
                'message' => 'COURSE_NOT_FOUND',
            ], 404);
        } catch (\Exception $e) {
            return response()->json([
                'message' => 'COURSE_DELETION_FAILED',
                'error' => $e->getMessage(),
            ], 500);
        }
    }
}

