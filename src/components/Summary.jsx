import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChartSimple, faCircleChevronDown, faCircleChevronUp } from '@fortawesome/free-solid-svg-icons';

const Summary = ({ sinta, journals }) => {
  journals = journals.map(journal => ({ ...journal, fee: parseInt(journal.fee) }))
  let averageFee = journals.reduce((acc, journal) => acc + journal.fee, 0) / journals.length;
  let minFee = Math.min(...journals.map(journal => journal.fee));
  let maxFee = Math.max(...journals.map(journal => journal.fee));

  if (journals.length == 0 || isNaN(averageFee) || isNaN(minFee) || isNaN(maxFee)) {
    averageFee = 0;
    minFee = 0;
    maxFee = 0;
  }
  return (
    <div className="flex flex-col md:flex-row stats shadow w-full">
      <div className="stat content-end md:w-1/3">
        <div className="stat-figure text-secondary">
          <FontAwesomeIcon icon={faChartSimple} className="inline-block w-8 h-8 stroke-current" />
        </div>
        <div className="stat-title font-semibold">SINTA {sinta}</div>
        <div className="stat-value">Rp {new Intl.NumberFormat('id-ID').format(averageFee)}</div>
        <div className="stat-desc">Average Fee</div>
      </div>
      <div className="stat content-end md:w-1/3">
        <div className="stat-figure text-secondary">
          <FontAwesomeIcon icon={faCircleChevronDown} className="inline-block w-8 h-8 stroke-current" />
        </div>
        <div className="stat-title"></div>
        <div className="stat-value">Rp {new Intl.NumberFormat('id-ID').format(minFee)}</div>
        <div className="stat-desc">Minimal Fee</div>
      </div>
      <div className="stat content-end md:w-1/3">
        <div className="stat-figure text-secondary">
          <FontAwesomeIcon icon={faCircleChevronUp} className="inline-block w-8 h-8 stroke-current" />
        </div>
        <div className="stat-title"></div>
        <div className="stat-value">Rp {new Intl.NumberFormat('id-ID').format(maxFee)}</div>
        <div className="stat-desc">Maksimal Fee</div>
      </div>
    </div>
  )
}

export default Summary