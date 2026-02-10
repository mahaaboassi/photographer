type Service = {
  name: string;
  description: string;
  icon: React.ReactNode;
};

type UserData = {
  name: string;
  email: string;
  phone: string;
  date: string;
  note: string;
};
const Confirmation = ({
  service,
  user,
}: {
  service: Service | null;
  user: UserData | null;
}) => {
  if (!service || !user) return null;

  return (
    <div className="flex flex-col items-center gap-6 text-center">
      <h2 className="text-lg md:text-2xl font-bold">Thank You</h2>

      <p>Your booking request has been prepared with the details below:</p>

      <div className="border p-6 rounded-xl text-left max-w-md w-full space-y-2">
        <p><strong>Service:</strong> {service.name}</p>
        <p><strong>Name:</strong> {user.name}</p>
        <p><strong>Email:</strong> {user.email}</p>
        {user.phone && <p><strong>Phone:</strong> {user.phone}</p>}
        {user.date && <p><strong>Date:</strong> {user.date}</p>}
        {user.note && <p><strong>Note:</strong> {user.note}</p>}
      </div>
    </div>
  );
};
export default Confirmation