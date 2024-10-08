import Breadcrumb from '../../components/Breadcrumbs/Breadcrumb';
import TableKeuangan from '../../components/Tables/TableArsip';

const keuangan = () => {
  return (
    <>
      <Breadcrumb pageName="Bidang Keuangan" />

      <div className="flex flex-col gap-10">
        <TableKeuangan filterByBidang="Keuangan" />
      </div>
    </>
  );
};

export default keuangan;
