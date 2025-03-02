import { useNavigate, useParams } from "react-router-dom";
import { Icons } from "../assets";
import Button from "./Button";
import { AdminHeaderProps } from "../interfaces/Product";

const AdminHeader: React.FC<AdminHeaderProps> = ({ title, renderComponet }) => {
  const navigate = useNavigate();
  const { productId } = useParams<{ productId: string }>();

  const headerTitle = productId ? "Edit Product" : title;

  return (
    <div className="flex flex-col sm:flex-row items-center justify-between pb-4 pt-14">
      <div className="p-4 lg:px-0 flex flex-col items-center">
        {renderComponet !== "products" && (
          <button onClick={() => navigate("/admin")} className="mr-4 px-3 py-1">
            <div className="flex items-center font-medium text-xs leading-4 tracking-widest text-custom-blue">
              <img src={Icons.Arrow.src} alt={Icons.Arrow.alt} />
              <span>Back to Products</span>
            </div>
          </button>
        )}
        <p className="font-semibold text-3xl leading-10 text-custom-dark">
          {headerTitle}
        </p>
      </div>
      {renderComponet === "products" && (
        <Button
          onClick={() => navigate("/admin/products/create")}
          text="CREATE NEW"
          variant="outlined"
        />
      )}
    </div>
  );
};

export default AdminHeader;
