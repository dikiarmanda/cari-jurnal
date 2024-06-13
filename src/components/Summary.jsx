import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChartSimple, faCircleChevronDown, faCircleChevronUp } from '@fortawesome/free-solid-svg-icons';

const Summary = ({ sinta, journals }) => {
  let averageFee = Math.floor(journals.reduce((acc, journal) => acc + journal.fee, 0) / journals.length);
  let minFee = Math.min(...journals.map(journal => journal.fee));
  let maxFee = Math.max(...journals.map(journal => journal.fee));

  if (journals.length == 0 || isNaN(averageFee) || isNaN(minFee) || isNaN(maxFee)) {
    averageFee = 0;
    minFee = 0;
    maxFee = 0;
  }

  const compactNumber = (value) => {
    const suffixes = ['', 'rb', 'Jt', 'M', 'T']
    const suffixNum = Math.floor(("" + value).length / 3)
    let shortValue = parseFloat(
      (suffixNum != 0 ? (value / Math.pow(1000, suffixNum)) : value)
        .toPrecision(3)
    )
    if (shortValue % 1 != 0) {
      shortValue = shortValue.toFixed(1)
    }
    return shortValue + suffixes[suffixNum]
  }

  return (
    <div className="flex md:basis-[49%] flex-col md:flex-row stats shadow w-full">
      <div className="stat content-end md:w-1/3">
        <div className="stat-figure text-secondary">
          <FontAwesomeIcon icon={faChartSimple} className="inline-block w-8 h-8 stroke-current" />
        </div>
        <div className="stat-title font-semibold">SINTA {sinta}</div>
        <div className="stat-value">Rp {compactNumber(averageFee)}</div>
        <div className="stat-desc">Average Fee</div>
      </div>
      <div className="stat content-end md:w-1/3">
        <div className="stat-figure text-secondary">
          <FontAwesomeIcon icon={faCircleChevronDown} className="inline-block w-8 h-8 stroke-current" />
        </div>
        <div className="stat-title"></div>
        <div className="stat-value">Rp {compactNumber(minFee)}</div>
        <div className="stat-desc">Minimal Fee</div>
      </div>
      <div className="stat content-end md:w-1/3">
        <div className="stat-figure text-secondary">
          <FontAwesomeIcon icon={faCircleChevronUp} className="inline-block w-8 h-8 stroke-current" />
        </div>
        <div className="stat-title"></div>
        <div className="stat-value">Rp {compactNumber(maxFee)}</div>
        <div className="stat-desc">Maksimal Fee</div>
      </div>
    </div>
  )
}

export default Summary