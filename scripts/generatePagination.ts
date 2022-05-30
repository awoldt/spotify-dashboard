import {
  top_artists,
  top_tracks,
  recently_played,
} from "../interfaces/spotifyData";

export async function generatePagination(
  items: top_tracks[] | top_artists[] | recently_played[] | null
) {
  try {
    //1 PAGE (0-10 tracks)
    if (items!.length <= 10) {
      let y = new Array();
      for (let i = 0; i < items!.length; ++i) {
        y.push(items![i]);
      }
      let x = {
        pages: [y], //array with only 1 array inside (1 page)
      };
      return x;
    }
    //2 PAGES (11-20 tracks)
    else if (items!.length > 10 && items!.length <= 20) {
      let y = new Array();
      let z = new Array();
      for (let i = 0; i < 10; ++i) {
        y.push(items![i]);
      }
      for (let i = 10; i < items!.length; ++i) {
        z.push(items![i]);
      }
      let x = {
        pages: [y, z], //array with 2 arrays inside (2 pages)
      };
      return x;
    }
    //3 PAGES (21-30 tracks)
    else if (items!.length > 20 && items!.length <= 30) {
      let y = new Array();
      let z = new Array();
      let w = new Array();
      for (let i = 0; i < 10; ++i) {
        y.push(items![i]);
      }
      for (let i = 10; i < 20; ++i) {
        z.push(items![i]);
      }
      for (let i = 20; i < items!.length; ++i) {
        w.push(items![i]);
      }
      let x = {
        pages: [y, z, w], //array with 2 arrays inside (2 pages)
      };
      return x;
    }
    //4 PAGES (31-40 tracks)
    else if (items!.length > 30 && items!.length <= 40) {
      let y = new Array();
      let z = new Array();
      let w = new Array();
      let t = new Array();

      for (let i = 0; i < 10; ++i) {
        y.push(items![i]);
      }
      for (let i = 10; i < 20; ++i) {
        z.push(items![i]);
      }
      for (let i = 20; i < 30; ++i) {
        w.push(items![i]);
      }
      for (let i = 30; i < items!.length; ++i) {
        t.push(items![i]);
      }
      let x = {
        pages: [y, z, w, t], //array with 2 arrays inside (2 pages)
      };
      return x;
    }
    //5 PAGES (41-50 tracks)
    else if (items!.length > 40 && items!.length <= 50) {
      let y = new Array();
      let z = new Array();
      let w = new Array();
      let t = new Array();
      let q = new Array();

      for (let i = 0; i < 10; ++i) {
        y.push(items![i]);
      }
      for (let i = 10; i < 20; ++i) {
        z.push(items![i]);
      }
      for (let i = 20; i < 30; ++i) {
        w.push(items![i]);
      }
      for (let i = 30; i < 40; ++i) {
        t.push(items![i]);
      }
      for (let i = 40; i < items!.length; ++i) {
        q.push(items![i]);
      }
      let x = {
        pages: [y, z, w, t, q], //array with 2 arrays inside (2 pages)
      };
      return x;
    } else {
      return "pagination data throws error :(";
    }
  } catch (e) {
    console.log("error while generating pagination data :(");
    return null;
  }
}
