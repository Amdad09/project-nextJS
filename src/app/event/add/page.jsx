import AddEventForm from "@/app/components/AddEventForm";
import { getServerSession } from "next-auth";
import { redirect } from "next/navigation";


const AddEventPage = async () => {
    const session = await getServerSession();

  if (!session) {
    redirect("/login");
  }
    return (
        <div className="mt-12">
            <AddEventForm />
        </div>
    );
};

export default AddEventPage;
