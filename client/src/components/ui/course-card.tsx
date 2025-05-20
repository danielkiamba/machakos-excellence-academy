import { Link } from "wouter";
import { type Course } from "@shared/schema";

interface CourseCardProps {
  course: Course;
}

const CourseCard = ({ course }: CourseCardProps) => {
  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition duration-300">
      <div className="h-3 bg-secondary"></div>
      <div className="p-6">
        <div className="text-primary text-lg mb-2">
          <i className={`fas fa-${course.icon} mr-2`}></i>
          {course.category}
        </div>
        <h3 className="font-poppins font-semibold text-xl mb-3">{course.title}</h3>
        <p className="text-gray-600 mb-4">{course.description}</p>
        <div className="flex items-center text-sm text-gray-500 mb-4">
          <div className="mr-4">
            <i className="far fa-clock mr-1"></i> {course.hoursPerWeek} hours/week
          </div>
          <div>
            <i className="fas fa-user-graduate mr-1"></i> {course.grades}
          </div>
        </div>
        <Link href={`/courses/${course.id}`}>
          <a className="text-secondary hover:text-primary font-medium inline-flex items-center">
            Learn more <i className="fas fa-arrow-right ml-1 text-xs"></i>
          </a>
        </Link>
      </div>
    </div>
  );
};

export default CourseCard;
