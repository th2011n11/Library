//------------------------------------------------------------------------------
// <auto-generated>
//    This code was generated from a template.
//
//    Manual changes to this file may cause unexpected behavior in your application.
//    Manual changes to this file will be overwritten if the code is regenerated.
// </auto-generated>
//------------------------------------------------------------------------------

namespace Library.Models
{
    using System;
    using System.Collections.Generic;
    
    public partial class BoPhan
    {
        public BoPhan()
        {
            this.NhanViens = new HashSet<NhanVien>();
        }
    
        public string MaBoPhan { get; set; }
        public string TenBoPhan { get; set; }
        public Nullable<int> TruongBoPhan { get; set; }
        public string ChucNang { get; set; }
    
        public virtual ICollection<NhanVien> NhanViens { get; set; }
    }
}
